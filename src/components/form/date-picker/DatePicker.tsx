import type { ReactElement, SyntheticEvent } from 'react';
import type { ReactDatePickerProps } from 'react-datepicker';
import type { BaseInputProps } from '../types';

import ReactDatePicker from 'react-datepicker';
import TextField from '@mui/material/TextField';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { styled } from '@mui/material/styles';
import { Header } from './components';

const StyledCalendarMonthIcon = styled(CalendarMonthIcon)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
interface DatePickerProps
  extends BaseInputProps<
    Omit<ReactDatePickerProps, 'selectsRange' | 'onChange'>
  > {
  type?: 'default' | 'range';
  dateFormat?: ReactDatePickerFormat;
  onChange?: (
    date: ReactDatePickerFunctionParams,
    event: SyntheticEvent<any> | undefined,
  ) => void;
}

export const DatePicker = (props: DatePickerProps): ReactElement => {
  const {
    name,
    label,
    error,
    helperText,
    type = 'default',
    showPopperArrow = false,
    dateFormat = 'MM/dd/yyyy',
    placeholderText = 'Please Input',
    onChange,
    ...rest
  } = props;

  const handleDefaultOnChange = (): void => {
    return;
  };

  return (
    <ReactDatePicker
      name={name}
      autoComplete="off"
      dateFormat={dateFormat}
      selectsRange={type === 'range'}
      placeholderText={placeholderText}
      showPopperArrow={showPopperArrow}
      renderCustomHeader={(customHeaderProps) => (
        <Header {...customHeaderProps} />
      )}
      customInput={
        <TextField
          id={name}
          label={label}
          autoComplete="off"
          error={error}
          helperText={helperText}
          InputProps={{
            endAdornment: <StyledCalendarMonthIcon />,
          }}
        />
      }
      popperModifiers={[
        {
          name: 'preventOverflow',
          options: {
            rootBoundary: 'viewport',
            tether: false,
            altAxis: true,
          },
        },
      ]}
      onChange={onChange ?? handleDefaultOnChange}
      {...rest}
    />
  );
};

export default DatePicker;
