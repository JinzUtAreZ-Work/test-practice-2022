import type { ReactElement } from 'react';

import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const StyledButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(-2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: theme.spacing(4),
  height: theme.spacing(4),
  backgroundColor: theme.palette.common.white,
  boxShadow: '0px 2px 10px #BFBEBE96',
  border: 0,
  borderRadius: '50%',
  marginTop: theme.mixins.toolbar.minHeight,
  cursor: 'pointer',
  zIndex: theme.zIndex.drawer + 1,
}));

interface CollapseButtonProps {
  isCollapsed: boolean;
  onClick: () => void;
}

const CollapseButton = (props: CollapseButtonProps): ReactElement => {
  const { isCollapsed, onClick } = props;

  return (
    <StyledButton onClick={onClick}>
      {isCollapsed ? (
        <ChevronLeftIcon color="primary" />
      ) : (
        <ChevronRightIcon color="primary" />
      )}
    </StyledButton>
  );
};

export default CollapseButton;
