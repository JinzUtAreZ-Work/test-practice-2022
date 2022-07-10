import type { ReactNode } from 'react';

declare global {
  export type DateFormat =
    | 'MM/DD/YYYY'
    | 'YYYY/MM/DD'
    | 'DD/MM/YYYY'
    | 'DDMMYYYY';

  export type ReactDatePickerFormat =
    | 'MM/dd/yyyy'
    | 'yyyy/MM/dd'
    | 'dd/MM/yyyy'
    | 'ddMMyyyy';

  export type ReactDatePickerFunctionParams =
    | Date
    | null
    | [Date | null, Date | null];

  export interface LabelValue {
    label: string;
    value: string;
  }

  export type PropsWithChildren<T = object> = T & {
    children?: ReactNode;
  };

  export type MuiColor =
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'gray'
    | 'metalicBlue'
    | 'spanishGray'
    | 'independence'
    | 'lavenderIndigo'
    | 'telemagenta';
}
