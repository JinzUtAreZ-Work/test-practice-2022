import type { ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { Toolbar } from '@mui/material';

import { Navbar } from '..';
import { Sidebar } from './components';

const StyledContainer = styled('div')({
  display: 'flex',
  minHeight: '100vh',
});

const StyledContent = styled('div')(({ theme }) => ({
  flexGrow: 1,
  marginBottom: theme.spacing(6),
  minHeight: `calc(100% - ${theme.mixins.toolbar.minHeight}px)`,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: theme.spacing(6.5),
}));

type MainProps = PropsWithChildren;

export const MainLayout = (props: MainProps): ReactElement => {
  const { children } = props;

  return (
    <StyledContainer>
      <Navbar />
      <Sidebar />
      <StyledContent>
        <StyledToolbar />
        {children}
      </StyledContent>
    </StyledContainer>
  );
};

export default MainLayout;
