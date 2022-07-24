import type { ReactElement } from 'react';
import type { CheckboxProps } from '@mui/material/Checkbox';
import type { BaseInputProps } from '../types';

import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';

import { getOption } from '../utils';

interface CheckboxGroupProps<Type> extends BaseInputProps<CheckboxProps> {
  row?: boolean;
  options: Type[];
  optionLabelKey?: keyof Type | 'label';
  optionValueKey?: keyof Type | 'value';
}

export const CheckboxGroup = <Type extends object>(
  props: CheckboxGroupProps<Type>,
): ReactElement => {
  const {
    name,
    label,
    error,
    row,
    helperText,
    options,
    optionValueKey = 'value',
    optionLabelKey = 'label',
  } = props;
  const getOptionValue = getOption<Type>(optionValueKey);
  const getOptionLabel = getOption<Type>(optionLabelKey);

  return (
    <FormControl component="fieldset" error={error}>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <FormGroup row={row} sx={{ marginTop: 1.5 }}>
        {options.map((option) => {
          return (
            <FormControlLabel
              key={getOptionValue(option)}
              label={getOptionLabel(option)}
              value={getOptionValue(option)}
              control={<Checkbox name={name} onChange={props.onChange} />}
            />
          );
        })}
      </FormGroup>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
};

export default CheckboxGroup;
