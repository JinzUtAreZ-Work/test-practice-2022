import type { ReactElement } from 'react';
import type { CheckboxProps as MuiCheckboxProps } from '@mui/material';
import type { BaseInputProps } from '../types';

import MuiCheckbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

type CheckboxProps = BaseInputProps & MuiCheckboxProps;

export const Checkbox = (props: CheckboxProps): ReactElement => {
  const { name, label, error, helperText, ...rest } = props;
  return (
    <FormControl component="fieldset" error={error}>
      <FormControlLabel
        label={label}
        control={<MuiCheckbox inputProps={{ 'aria-label': name }} {...rest} />}
      />
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
};

export default Checkbox;
