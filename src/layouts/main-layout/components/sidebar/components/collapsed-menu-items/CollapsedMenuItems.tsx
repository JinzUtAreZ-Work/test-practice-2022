import type { ReactElement } from 'react';
import type { Route } from '~/routes';
import type { PopupState } from 'material-ui-popup-state/core';

import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { getSubMenuPath } from '../utils';

interface CollapsedMenuItemsProps {
  route: Route;
  popupState: PopupState;
}

export const CollapsedMenuItems = (
  props: CollapsedMenuItemsProps,
): ReactElement => {
  const { route, popupState } = props;
  const navigate = useNavigate();

  const redirectToPage = (path: string): void => {
    popupState.close();
    navigate(path);
  };

  return (
    <Menu
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
      {...bindMenu(popupState)}>
      {route.children?.map((subRoute) => {
        const subRoutePath = getSubMenuPath({
          menuItem: route,
          subMenuItem: subRoute,
        });

        return (
          <MenuItem key={uuidv4()} onClick={() => redirectToPage(subRoutePath)}>
            {subRoute.label}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default CollapsedMenuItems;
