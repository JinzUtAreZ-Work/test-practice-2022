import {
  Checkbox,
  CheckboxGroup,
  DatePicker,
  RadioGroup,
  Select,
  TextArea,
  TextField,
  Dropzone,
  PinCode,
} from '.';
import { withInputController } from './hocs';

export const ControlledCheckbox = withInputController(Checkbox);
export const ControlledCheckboxGroup = withInputController(
  CheckboxGroup,
) as typeof CheckboxGroup;
export const ControlledDatePicker = withInputController(
  DatePicker,
  'date-picker',
);
export const ControlledRadioGroup = withInputController(
  RadioGroup,
) as typeof RadioGroup;
export const ControlledSelect = withInputController(Select) as typeof Select;
export const ControlledTextArea = withInputController(TextArea);
export const ControlledTextField = withInputController(TextField);
export const ControlledDropzone = withInputController(Dropzone, 'dropzone');
export const ControlledPinCode = withInputController(PinCode, 'pin-code');
