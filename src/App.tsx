import type { ReactElement } from 'react';

import { useAuthContext } from '~/contexts/auth-context';
import AuthenticatedApp from '~/AuthenticatedApp';
import Login from '~/screens/overview-login';

const App = (): ReactElement => {
  const { authUser } = useAuthContext();

  return authUser ? <AuthenticatedApp /> : <Login />;
};

export default App;
