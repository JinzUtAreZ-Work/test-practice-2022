import type { ReactElement } from 'react';

import moment from 'moment';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useAuthContext } from '~/contexts/auth-context';
import { Title, SiteMap, UserMenu } from './components';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
  justifyContent: 'space-between',
  zIndex: theme.zIndex.drawer + 1,
  padding: theme.spacing(0.5, 2),
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  minHeight: theme.spacing(6),
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  height: theme.spacing(4),
  alignSelf: 'center',
  backgroundColor: theme.palette.common.white,
}));

export const Navbar = (): ReactElement => {
  const { authUser } = useAuthContext();

  return (
    <StyledAppBar position="fixed">
      <Title />
      {authUser ? (
        <>
          <SiteMap />
          <Box sx={{ flexGrow: 1 }} />
          <UserMenu />
          <StyledDivider orientation="vertical" flexItem />
        </>
      ) : null}
      <Typography color="inherit">
        {moment(new Date()).format('D/MM/YYYY')}
      </Typography>
    </StyledAppBar>
  );
};

export default Navbar;
