import { TextField, Select, DatePicker } from '~/components';

import { withEditableCell } from './hocs';

export const EditableTextFieldCell = withEditableCell(TextField);
export const EditableSelectCell = withEditableCell(Select);
export const EditableDatePickerCell = withEditableCell(
  DatePicker,
  'date-picker',
);
