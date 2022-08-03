import type { ReactElement, SyntheticEvent } from 'react';

import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiTabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { TabPanel, TabNumber } from './components';

const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const StyledMuiTabs = styled(MuiTabs)(({ theme }) => ({
  borderRadius: 50,
  background: theme.palette.common.white,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  '& .MuiTabs-flexContainer': {
    justifyContent: 'center',
  },
  [`& .${tabsClasses.indicator}`]: {
    display: 'none',
  },
}));

const StyledTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive, theme }) => ({
  '& svg': {
    padding: theme.spacing(1),
  },
  '& p,svg': {
    color: theme.palette.common.white,
    backgroundColor: isActive
      ? theme.palette.primary.main
      : theme.palette.grey[400],
    borderRadius: '100%',
    width: theme.spacing(5),
    height: theme.spacing(5),
    textAlign: 'center',
  },
}));

interface TabProps {
  name: string;
  tabs: TabObject[];
}

export const Tabs = (props: TabProps): ReactElement => {
  const { name, tabs } = props;
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (
    _event: SyntheticEvent,
    selectedTabIndex: number,
  ): void => {
    setActiveTabIndex(selectedTabIndex);
  };

  const renderTabIcon = (tab: TabObject, tabNumber: number): ReactElement => {
    if (!tab.icon) {
      return <TabNumber>{tabNumber}</TabNumber>;
    }
    return tab.icon;
  };

  return (
    <StyledContainer>
      <StyledMuiTabs
        aria-label={name}
        variant="scrollable"
        scrollButtons={false}
        value={activeTabIndex}
        onChange={handleTabChange}>
        {tabs.map((tab, index) => (
          <StyledTab
            id={`tab-${index}`}
            aria-controls={`tab-panel-${index}`}
            disableRipple
            key={index}
            label={tab.label}
            value={index}
            isActive={index === activeTabIndex}
            icon={renderTabIcon(tab, index + 1)}
          />
        ))}
      </StyledMuiTabs>
      {tabs.map((tab, index) => (
        <TabPanel
          key={index}
          tabIndex={index}
          isVisible={index === activeTabIndex}>
          {tab.element}
        </TabPanel>
      ))}
    </StyledContainer>
  );
};

export default Tabs;
