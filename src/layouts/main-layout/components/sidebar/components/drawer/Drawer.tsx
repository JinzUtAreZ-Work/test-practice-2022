import type { Theme, CSSObject } from '@mui/material/styles';

import { styled } from '@mui/material/styles';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';

const openedMixin = (theme: Theme): CSSObject => ({
  width: theme.custom.drawer.width,
  transition: theme.transitions.create(['width', 'padding'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: 'initial',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create(['width', 'padding'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: 'initial',
  width: `calc(${theme.spacing(9)} + 1px)`,
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: theme.custom.drawer.width,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    [`& .${drawerClasses.paper}`]: {
      ...openedMixin(theme),
      border: 0,
      boxShadow: '0px 2px 10px #BFBEBE96',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    [`& .${drawerClasses.paper}`]: {
      ...closedMixin(theme),
      border: 0,
      boxShadow: '0px 2px 10px #BFBEBE96',
    },
  }),
}));

export default Drawer;
