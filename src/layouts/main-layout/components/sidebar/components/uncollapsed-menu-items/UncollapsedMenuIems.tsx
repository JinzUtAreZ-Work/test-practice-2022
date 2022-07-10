import type { ReactElement } from 'react';
import type { Route } from '~/routes';

import { v4 as uuidv4 } from 'uuid';

import { getSubMenuPath } from '../utils';
import MenuItem from '../menu-item/index';

interface UncollapsedMenuItemsProps {
  route: Route;
}

const UnCollapsedMenuItems = (
  props: UncollapsedMenuItemsProps,
): ReactElement => {
  const { route } = props;

  return (
    <>
      {route.children?.map((subRoute) => {
        const subMenuPath = getSubMenuPath({
          menuItem: route,
          subMenuItem: subRoute,
        });

        return (
          <MenuItem
            key={uuidv4()}
            type="link"
            isSubMenu
            path={subMenuPath}
            label={subRoute.label}
            icon={subRoute.icon}
          />
        );
      })}
    </>
  );
};

export default UnCollapsedMenuItems;
