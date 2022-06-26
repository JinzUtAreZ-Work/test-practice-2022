import type { ComponentType, ReactElement } from 'react';
import type { FormikValues } from 'formik';
import type { BaseInputProps, WithInputControllerType } from './types';

import { Field, useFormikContext } from 'formik';

type WrappedInputProps<Type> = Type &
  BaseInputProps & {
    name: string;
  };

type WithInputController<Type extends object> = (
  props: WrappedInputProps<Type>,
) => ReactElement;

export const withInputController = <Type extends FormikValues>(
  WrappedInput: ComponentType<Type>,
  inputType: WithInputControllerType = 'text',
): WithInputController<Type> => {
  return (props: WrappedInputProps<Type>): ReactElement => {
    const { name, helperText, ...rest } = props;
    const form = useFormikContext<Type>();

    const fieldValue = form.values[name];
    const fieldError = form.errors[name];
    const hasError = Boolean(fieldError) && Boolean(form.touched[name]);
    const errorMessage = hasError ? fieldError : helperText;

    const handleDateChange = (date: ReactDatePickerFunctionParams): void => {
      form.setFieldValue(name, date);
    };

    const handleDropzoneChange = (files: File[]): void => {
      form.setFieldValue(name, files);
    };

    const handlePinCodeChange = (pinCode: string): void => {
      form.setFieldValue(name, pinCode);
    };

    const getInputChange = ():
      | typeof handleDateChange
      | typeof handleDropzoneChange
      | typeof handlePinCodeChange
      | typeof form.handleChange => {
      switch (inputType) {
        case 'date-picker':
          return handleDateChange;
        case 'dropzone':
          return handleDropzoneChange;
        case 'pin-code':
          return handlePinCodeChange;
        default:
          return form.handleChange(name);
      }
    };

    return (
      <Field
        component={WrappedInput}
        name={name}
        error={hasError}
        helperText={errorMessage}
        value={fieldValue}
        onChange={getInputChange()}
        {...(rest as Type)}
      />
    );
  };
};
