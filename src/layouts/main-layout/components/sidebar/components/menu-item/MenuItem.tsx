import type { ReactElement } from 'react';
import type { Route } from '~/routes';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon';
import ListItemText, { listItemTextClasses } from '@mui/material/ListItemText';
import { bindHover } from 'material-ui-popup-state';

const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'type',
})<{ type: 'text' | 'link' }>(({ type, theme }) => ({
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  cursor: type === 'link' ? 'pointer' : 'default',
  pointerEvents: 'all',
  '&:hover':
    type !== 'link'
      ? {
          background: 'transparent',
          color: theme.palette.common.white,
          [`& .${listItemIconClasses.root}`]: {
            color: theme.palette.primary.main,
          },
          '&:not(.Mui-selected) *': {
            color: theme.palette.primary.main,
          },
          '&:not(.Mui-selected) .MuiTypography-root': {
            color: theme.palette.independence.main,
          },
        }
      : undefined,
  '&.Mui-selected':
    type !== 'link'
      ? {
          backgroundColor: 'inherit',
          color: theme.palette.warning.main,
          [`& .${listItemIconClasses.root}`]: {
            color: 'inherit',
          },
        }
      : undefined,
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  alignSelf: 'flex-start',
  minWidth: 46,
  marginRight: 11,
  '.Mui-selected &': {
    color: theme.palette.primary.main,
  },
}));

const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isSubMenu',
})<{ isSubMenu?: boolean }>(({ isSubMenu, theme }) => ({
  [`& .${listItemTextClasses.primary}`]: {
    color: theme.palette.independence.main,
    fontSize: isSubMenu ? theme.spacing(1.5) : theme.spacing(1.625),
    fontWeight: isSubMenu
      ? theme.typography.fontWeightRegular
      : theme.typography.fontWeightBold,
    '.Mui-selected &': {
      color: theme.palette.primary.main,
    },
  },
}));

const StyledLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
});

interface MenuItemProps extends Route {
  type?: 'text' | 'link';
  path: string;
  isSubMenu?: boolean;
  popMenuHoverProps?: ReturnType<typeof bindHover>;
}

const MenuItem = (props: MenuItemProps): ReactElement => {
  const {
    type = 'link',
    path,
    label,
    icon,
    isSubMenu,
    popMenuHoverProps,
  } = props;
  const resolvedPath = useResolvedPath(path);
  const matchRoute = useMatch({ path: resolvedPath.pathname, end: true });

  const renderListItem = (): ReactElement => (
    <StyledListItem
      type={type}
      selected={type === 'link' && Boolean(matchRoute)}
      {...popMenuHoverProps}>
      <StyledListItemIcon>{icon}</StyledListItemIcon>
      <StyledListItemText isSubMenu={isSubMenu} primary={label} />
    </StyledListItem>
  );

  return type === 'link' ? (
    <StyledLink to={path}>{renderListItem()}</StyledLink>
  ) : (
    renderListItem()
  );
};

export default MenuItem;
