import type { ReactElement, ReactNode } from 'react';
import {
  createContext,
  useState,
  useContext,
  useCallback,
  Fragment,
} from 'react';

export interface VisibilityObject<Key = string> {
  key: Key;
  element: ReactNode;
}

interface VisibilityProviderProps<Key = string> {
  defaultVisible: Key[];
  items: VisibilityObject<Key>[];
}

interface UseVisibilityContextInstance<Key = string> {
  toggleVisibility: (items: Key[]) => void;
  checkIfVisible: (item: Key) => boolean;
}

const visibilityContext = createContext<
  UseVisibilityContextInstance | undefined
>(undefined);

export const VisibilityProvider = <Key extends string>(
  props: VisibilityProviderProps<Key>,
): ReactElement => {
  const { defaultVisible = [], items } = props;
  const [visibleItems, setVisibleItems] = useState<Key[]>(defaultVisible);

  const toggleVisibility = useCallback((items: Key[]) => {
    setVisibleItems(items);
  }, []);

  const checkIfVisible = useCallback(
    (item: Key) => {
      return visibleItems.some((visibleItem) => visibleItem === item);
    },
    [visibleItems],
  );

  return (
    <visibilityContext.Provider value={{ toggleVisibility, checkIfVisible }}>
      {items.map(({ key, element }) => (
        <Fragment key={key}>{checkIfVisible(key) ? element : null}</Fragment>
      ))}
    </visibilityContext.Provider>
  );
};

export const useVisibilityContext = <
  Key extends string,
>(): UseVisibilityContextInstance<Key> => {
  const context = useContext<UseVisibilityContextInstance<Key> | undefined>(
    visibilityContext,
  );

  if (!context) {
    throw new Error(
      'useVisibilityContext must be used within a Visibility Provider. ',
    );
  }

  return context;
};
