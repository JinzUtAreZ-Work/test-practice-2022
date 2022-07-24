import type { Role } from '~/models';
import type { Route } from '~/routes';

import { deepSearch } from '~/utils';

export const getRoutesByPermission = (
  routes: Route[],
  permission: Role,
): Route[] => {
  return deepSearch<Route>({
    items: routes,
    searchFrom: 'children',
    predicate: (route) => {
      return (
        !route?.permissions?.length ||
        route.permissions?.includes(permission) ||
        route.path === '*'
      );
    },
  });
};
