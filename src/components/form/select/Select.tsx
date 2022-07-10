import type { ReactElement, ReactNode } from 'react';
import type { SelectProps as MuiSelectProps } from '@mui/material';
import type { BaseInputProps } from '../types';

import { keyBy } from 'lodash';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import MuiSelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { getOption } from '~/components/form/utils';

const StyledPlaceholder = styled(MenuItem)({
  height: '1.4375rem',
  padding: '0.25rem 0 0.3125rem 0',
});

const StyledMultipleSelectedContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

const StyledOptionContainer = styled(Box)({
  height: '1.5rem',
  padding: '0.25rem 0.5rem',
  backgroundColor: '#f5f5f5',
  border: '1px solid #f0f0f0',
  borderRadius: '0.5rem',
});

interface SelectProps<Type> extends BaseInputProps<MuiSelectProps> {
  options: Type[];
  optionValueKey?: keyof Type | 'value';
  optionLabelKey?: keyof Type | 'label';
}

export const Select = <Type extends object>(
  props: SelectProps<Type>,
): ReactElement => {
  const {
    name,
    label,
    error,
    multiple,
    helperText,
    options = [],
    optionValueKey = 'value',
    optionLabelKey = 'label',
    placeholder = 'Please Select',
    ...rest
  } = props;

  const getOptionValue = getOption<Type>(optionValueKey);
  const getOptionLabel = getOption<Type>(optionLabelKey);

  const renderSelectIcon = (): ReactElement => {
    return <ExpandMoreIcon />;
  };

  const renderSelectValue = (selected: unknown): ReactNode => {
    if (!selected || !(selected as string[]).length) {
      return (
        <StyledPlaceholder disabled>
          <em>{placeholder}</em>
        </StyledPlaceholder>
      );
    }

    if (multiple) {
      const selectedItems = selected as string[];

      return (
        <StyledMultipleSelectedContainer>
          {selectedItems?.map((item) => {
            return (
              <StyledOptionContainer key={item}>
                {getOptionLabel(keyBy(options, getOptionValue)[item])}
              </StyledOptionContainer>
            );
          })}
        </StyledMultipleSelectedContainer>
      );
    }

    return getOptionLabel(keyBy(options, getOptionValue)[selected as string]);
  };

  const renderNoneOption = (): ReactNode => {
    if (multiple) return null;

    return (
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
    );
  };

  const renderOptions = (): ReactNode[] => {
    return options?.map((option) => {
      return (
        <MenuItem key={getOptionValue(option)} value={getOptionValue(option)}>
          {getOptionLabel(option)}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl error={error} fullWidth>
      {label ? <InputLabel id={name}>{label}</InputLabel> : null}
      <MuiSelect
        displayEmpty
        id={name}
        labelId={name}
        multiple={multiple}
        IconComponent={renderSelectIcon}
        renderValue={renderSelectValue}
        {...rest}>
        {renderNoneOption()}
        {renderOptions()}
      </MuiSelect>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
};

export default Select;
