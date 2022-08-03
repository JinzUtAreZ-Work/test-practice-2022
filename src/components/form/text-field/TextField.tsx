import type { ReactElement } from 'react';
import type { TextFieldProps } from '@mui/material';
import type { BaseInputProps } from '../types';
import MuiTextField from '@mui/material/TextField';

type MuiTextFieldProps = BaseInputProps<TextFieldProps>;

export const TextField = (props: MuiTextFieldProps): ReactElement => {
  const { name, placeholder = 'Place input', ...rest } = props;
  return <MuiTextField id={name} placeholder={placeholder} {...rest} />;
};

export default TextField;
