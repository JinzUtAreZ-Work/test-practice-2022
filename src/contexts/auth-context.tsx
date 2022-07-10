import type { ReactElement } from 'react';
import type { User } from '~/models';
import { createContext, useState, useContext } from 'react';

import { faker } from '@faker-js/faker';

type AuthContextProps = PropsWithChildren;

interface UseAuthContextResult {
  authUser: User | null;
  login: (params: User) => void;
  logout: () => void;
}

const authContext = createContext<UseAuthContextResult | undefined>(undefined);

const fakeUser: User = {
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  assignedDepartment: faker.lorem.word(),
  contactPerson: faker.lorem.word(),
  contactNumber: faker.lorem.word(),
  department: faker.lorem.word(),
  email: faker.internet.email(),
  role: 'preparer',
};

export const AuthProvider = (props: AuthContextProps): ReactElement => {
  const { children } = props;
  const [authUser, setAuthUser] = useState<User | null>(fakeUser);

  const login = (params: User): void => {
    setAuthUser(params);
  };

  const logout = (): void => {
    setAuthUser(null);
  };

  const data: UseAuthContextResult = {
    authUser,
    login,
    logout,
  };
  return <authContext.Provider value={data}>{children}</authContext.Provider>;
};

export const useAuthContext = (): UseAuthContextResult => {
  const context = useContext<UseAuthContextResult | undefined>(authContext);

  if (!context) {
    throw new Error('useAuthContext must be used within Auth Provider');
  }

  return context;
};
