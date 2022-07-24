import type { ReactElement, ReactNode } from 'react';
import type { AccountInformation, AccountTag } from '~/models';

import { useState } from 'react';
import {
  styled,
  Box,
  Collapse,
  Stack,
  Typography,
  Chip,
  IconButton,
} from '@mui/material';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledCollapse = styled(Collapse)({
  position: 'relative',
});

const StyledContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 4),
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  '& dt': {
    color: theme.palette.common.white,
  },
}));

const StyledChip = styled(Chip)({
  borderRadius: 5,
  fontWeight: 'bold',
});

const StyledInformationContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const StyledExpandButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(1),
  right: theme.spacing(5.25),
  padding: 0,
  color: theme.palette.common.white,
  '& svg': {
    fontSize: theme.spacing(3.5),
  },
}));

interface AccountPanelProps {
  information: AccountInformation;
  children?: ReactNode;
}

export const AccountPanel = (props: AccountPanelProps): ReactElement => {
  const { information, children } = props;
  const [isOpen, setIsOpen] = useState(true);

  const getTagColor = (tag: AccountTag): MuiColor => {
    switch (tag) {
      case 'AML':
        return 'middleYellow';
      case 'Bankruptcy':
        return 'independence';
      case 'Complaint':
        return 'halloweenOrange';
      case 'VIP':
        return 'marigold';
      default:
        return 'sonicSilver';
    }
  };

  const handlePanelVisibility = (): void => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <StyledCollapse in={isOpen} collapsedSize={48}>
      <StyledContainer>
        <Stack direction="row" alignItems="center" gap={2}>
          <Typography variant="h5" fontWeight="bold">
            {information.name}
          </Typography>
          {information.tags?.map((tag, index) => (
            <StyledChip
              key={index}
              label={tag}
              color={getTagColor(tag)}
              size="small"
            />
          ))}
        </Stack>

        <StyledInformationContainer>{children}</StyledInformationContainer>
      </StyledContainer>
      <StyledExpandButton onClick={handlePanelVisibility}>
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </StyledExpandButton>
    </StyledCollapse>
  );
};

export default AccountPanel;
