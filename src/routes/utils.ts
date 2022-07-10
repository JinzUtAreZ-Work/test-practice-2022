import type { Role } from '~/models';
import type { Route } from '~/routes';

import { matchRoutes, useLocation } from 'react-router-dom';

import { deepSearch } from '~/utils';
import { appRoutes } from './config';

export const getRoutesByLocation = (): Route[] => {
  const location = useLocation();
  const matchedRoutes = matchRoutes(appRoutes, location);
  const matchedRoutesWithLabels = matchedRoutes?.filter((matchedRoute) => {
    return Boolean((matchedRoute.route as Route)?.label);
  });

  const mappedRoutes = matchedRoutesWithLabels?.map(
    (matchedRoute) => matchedRoute.route,
  );

  return mappedRoutes ?? [];
};

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
