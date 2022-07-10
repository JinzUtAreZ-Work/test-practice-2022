export type BaseInputProps<Type = object> = Type & {
  name: string;
  label?: string;
  error?: boolean;
  helperText?: string;
};

export type WithInputControllerType =
  | 'text'
  | 'date-picker'
  | 'dropzone'
  | 'pin-code';
