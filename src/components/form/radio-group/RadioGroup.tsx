import type { ReactElement } from 'react';
import type { RadioGroupProps as MuiRadioGroupProps } from '@mui/material';
import type { BaseInputProps } from '../types';

import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import MuiRadioGroup from '@mui/material/RadioGroup';

import { getOption } from '~/components/form/utils';

interface RadioGroupProps<Type> extends BaseInputProps<MuiRadioGroupProps> {
  row?: boolean;
  options: Type[];
  optionValueKey?: keyof Type | 'value';
  optionLabelKey?: keyof Type | 'label';
}

export const RadioGroup = <Type extends Object>(
  props: RadioGroupProps<Type>,
): ReactElement => {
  const {
    label,
    error,
    options,
    helperText,
    row = true,
    optionValueKey = 'value',
    optionLabelKey = 'label',
    ...rest
  } = props;

  const getOptionValue = getOption<Type>(optionValueKey);
  const getOptionLabel = getOption<Type>(optionLabelKey);

  return (
    <FormControl component="fieldset" error={error}>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <MuiRadioGroup row={row} sx={{ marginTop: 1.5 }} {...rest}>
        {options.map((option) => {
          return (
            <FormControlLabel
              control={<Radio />}
              key={getOptionValue(option)}
              value={getOptionValue(option)}
              label={getOptionLabel(option)}
            />
          );
        })}
      </MuiRadioGroup>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
};

export default RadioGroup;
