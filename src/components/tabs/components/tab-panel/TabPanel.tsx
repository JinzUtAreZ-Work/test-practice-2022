import type { ReactElement } from 'react';
import Box from '@mui/material/Box';

interface TabPanelProps extends PropsWithChildren {
  tabIndex: number;
  isVisible?: boolean;
}

export const TabPanel = (props: TabPanelProps): ReactElement | null => {
  const { tabIndex, isVisible, children } = props;
  if (!isVisible) return null;

  return (
    <Box
      id={`tab-panel-${tabIndex}`}
      role="tabpanel"
      aria-labelledby={`tab-${tabIndex}`}>
      {children}
    </Box>
  );
};

export default TabPanel;
