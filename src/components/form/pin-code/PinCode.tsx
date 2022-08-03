import type { ReactElement, CSSProperties } from 'react';
import type { BaseInputProps } from '../types';

import { styled } from '@mui/material/styles';
//import ReactOTPInput from 'react-otp-input';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

const StyledFormHelperText = styled(FormHelperText)({
  textAlign: 'center',
});

interface PinCodeProps extends BaseInputProps {
  className?: string;
  containerStyle?: CSSProperties;
  disabledStyle?: CSSProperties;
  errorStyle?: CSSProperties;
  focusStyle?: CSSProperties;
  hasErrored?: boolean;
  inputStyle?: CSSProperties;
  isDisabled?: boolean;
  isInputNum?: boolean;
  isInputSecure?: boolean;
  numInputs?: number;
  onChange?: (value: string) => void;
  placeholder?: string;
  separator?: CSSProperties;
  shouldAutoFocus?: boolean;
  value?: string;
  'data-testId'?: string;
  'data-cy'?: string;
}

export const PinCode = (props: PinCodeProps): ReactElement => {
  const {
    error,
    helperText, //...rest
  } = props;
  return (
    <FormControl error={error}>
      {/* <ReactOTPInput hasErrored={error} {...rest} containerStyle="otp-input" /> */}
      {helperText ? (
        <StyledFormHelperText>{helperText}</StyledFormHelperText>
      ) : null}
    </FormControl>
  );
};

export default PinCode;
