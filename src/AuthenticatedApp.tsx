import type { ReactElement } from 'react';
import type { Role } from '~/models';

import { useAppRoutes } from '~/hooks';
import { useAuthContext } from '~/contexts/auth-context';
import { MainLayout } from '~/layouts';

const AuthenticatedApp = (): ReactElement => {
  const { authUser } = useAuthContext();
  const { AppRoutes } = useAppRoutes(authUser?.role as Role);

  return <MainLayout>{AppRoutes}</MainLayout>;
};

export default AuthenticatedApp;
