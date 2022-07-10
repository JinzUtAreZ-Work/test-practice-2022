import type { Route } from '~/routes';

interface GetSubMenuPathParams {
  menuItem: Route;
  subMenuItem: Route;
}

export const getSubMenuPath = (params: GetSubMenuPathParams): string => {
  const { menuItem, subMenuItem } = params;

  if (subMenuItem.index) {
    return menuItem.path as string;
  }

  return `${menuItem.path}/${subMenuItem.path}` as string;
};
