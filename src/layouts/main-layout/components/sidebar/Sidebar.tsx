import type { ReactElement } from 'react';
import type { Role } from '~/models';
import type { Route } from '~/routes';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Popup, { bindHover } from 'material-ui-popup-state';
import Toolbar from '@mui/material/Toolbar';

import { deepSearch } from '~/utils';
import { useAppRoutes } from '~/hooks';
import { useAuthContext } from '~/contexts/auth-context';

import {
  Drawer,
  CollapseButton,
  DrawerContent,
  MenuItem,
  CollapsedMenuItems,
  UnCollapsedMenuItems,
} from './components';

export const Sidebar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const { authUser } = useAuthContext();
  const { userRoutes } = useAppRoutes(authUser?.role as Role);

  const getRoutesWithLabel = (): Route[] => {
    return deepSearch({
      items: userRoutes,
      searchFrom: 'children',
      predicate: (route) => !!route?.label,
    });
  };

  const toggleDrawer = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Drawer variant="permanent" open={isOpen}>
      <CollapseButton isCollapsed={isOpen} onClick={toggleDrawer} />
      <Toolbar />
      <DrawerContent isOpen={isOpen}>
        {getRoutesWithLabel()?.map((route) => {
          const menuItemId = uuidv4();

          return (
            <Popup key={menuItemId} variant="popover" popupId={menuItemId}>
              {(popupState) => {
                const hasSubRoutes = !!route.children?.length;

                return (
                  <>
                    <MenuItem
                      type={hasSubRoutes ? 'text' : 'link'}
                      path={route.path as string}
                      label={route.label}
                      icon={route.icon}
                      popMenuHoverProps={
                        hasSubRoutes ? bindHover(popupState) : undefined
                      }
                    />
                    {isOpen ? (
                      <UnCollapsedMenuItems route={route} />
                    ) : (
                      <CollapsedMenuItems
                        route={route}
                        popupState={popupState}
                      />
                    )}
                  </>
                );
              }}
            </Popup>
          );
        })}
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
