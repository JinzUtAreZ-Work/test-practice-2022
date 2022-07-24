import type { Role } from '~/models';
import type { Route } from '~/routes';
import type { UseAppRoutesResult } from './types';

import { matchRoutes, useRoutes, useLocation } from 'react-router-dom';

import { appRoutes } from './config';
import { getRoutesByPermission } from './utils';

export const useAppRoutes = (permission: Role): UseAppRoutesResult => {
  const userRoutes = getRoutesByPermission(appRoutes, permission);
  const AppRoutes = useRoutes(userRoutes);

  return { userRoutes, AppRoutes };
};

export const useRoutesByLocation = (): Route[] => {
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
