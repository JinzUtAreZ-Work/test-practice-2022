import type { ComponentType, ReactElement, ChangeEvent } from 'react';
import type { UpdateTableCellFunction, UpdateTableCellParams } from './types';

import { useState, useEffect } from 'react';

type WrappedComponentProps<Type> = Type &
  UpdateTableCellParams & {
    onUpdate?: UpdateTableCellFunction;
  };

type WithEditableCell<Type> = (
  props: WrappedComponentProps<Type>,
) => ReactElement;

export const withEditableCell = <Type extends object>(
  WrappedComponent: ComponentType<Type>,
  inputType: 'text' | 'date-picker' = 'text',
): WithEditableCell<Type> => {
  return (props: WrappedComponentProps<Type>): ReactElement => {
    const {
      rowIndex,
      columnId,
      value: initialValue = inputType === 'date-picker' ? null : '',
      onUpdate,
      ...rest
    } = props;
    const [value, setValue] = useState<unknown>(initialValue);
    const onUpdateCell = onUpdate as UpdateTableCellFunction;

    const handleChangeText = (event: ChangeEvent<HTMLInputElement>): void => {
      setValue(event.target.value);
    };

    const handleChangeDate = (date: ReactDatePickerFunctionParams): void => {
      setValue(date);
    };

    const handleUpdateOnBlur = (): void => {
      onUpdateCell({ rowIndex, value, columnId });
    };

    const getSelectedDateValue = (): Date | null => {
      if (!value) return null;

      if (typeof value === 'string' && !!value) {
        return new Date(value);
      }
      return value as Date;
    };

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    if (inputType === 'date-picker') {
      return (
        <WrappedComponent
          {...(rest as Type)}
          selected={getSelectedDateValue()}
          onChange={handleChangeDate}
          onBlur={handleUpdateOnBlur}
        />
      );
    }

    return (
      <WrappedComponent
        {...(rest as Type)}
        onChange={handleChangeText}
        onBlur={handleUpdateOnBlur}
      />
    );
  };
};
