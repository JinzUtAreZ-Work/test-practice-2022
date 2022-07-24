import type { ReactElement } from 'react';

import { styled } from '@mui/material/styles';
import { Stack, AppBar, Divider } from '@mui/material';

type BottomAppBarProps = PropsWithChildren;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  top: 'auto',
  bottom: 0,
  marginTop: '4rem',
  padding: theme.spacing(1.5, 6),
  color: theme.palette.common.white,
  backgroundColor: theme.palette.independence.main,
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
}));

export const BottomApp = (props: BottomAppBarProps): ReactElement => {
  const { children } = props;

  return (
    <StyledAppBar position="fixed">
      <Stack direction="row" gap={2} justifyContent="flex-end">
        <StyledDivider orientation="vertical" flexItem />
        {children}
      </Stack>
    </StyledAppBar>
  );
};
