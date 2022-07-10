import type { ReactElement } from 'react';
import type { Role } from '~/models';
import type { Route } from '~/routes';

import { useRoutes } from 'react-router-dom';

import { getRoutesByPermission, appRoutes } from '~/routes';

interface UseAppRoutesResult {
  AppRoutes: ReactElement | null;
  userRoutes: Route[];
}

export const useAppRoutes = (permission: Role): UseAppRoutesResult => {
  const userRoutes = getRoutesByPermission(appRoutes, permission);
  const AppRoutes = useRoutes(userRoutes);

  return { userRoutes, AppRoutes };
};

export default useAppRoutes;
