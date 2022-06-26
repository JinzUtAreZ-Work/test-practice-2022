import type { ReactNode } from 'react';

declare global {
  export type PropsWithChildren<T = object> = T & {
    children?: ReactNode;
  };

  export type ReactDatePickerFunctionParams =
    | Date
    | null
    | [Date | null, Date | null];
}
