import type { Route } from '~/routes';
import TestPage from '~/screens/test-screens/TestPage';
import NotFound from '~/screens/not-found/NotFound';

import AddReactionIcon from '@mui/icons-material/AddReaction';

export const appRoutes: Route[] = [
  {
    path: '/other-route',
    label: 'Other Route',
    element: <TestPage />,
    icon: <AddReactionIcon />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
