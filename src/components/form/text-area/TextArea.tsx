import type { ReactElement } from 'react';
import type { TextareaAutosizeProps } from '@mui/material';
import type { BaseInputProps } from '../types';

import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(1),
}));

const StyledTextArea = styled(TextareaAutosize, {
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError?: boolean }>(({ hasError, theme }) => ({
  border: hasError ? `1px solid ${theme.palette.error.main}` : undefined,
}));

type TextAreaProps = BaseInputProps<TextareaAutosizeProps>;

export const TextArea = (props: TextAreaProps): ReactElement => {
  const {
    name,
    label,
    error,
    helperText,
    minRows = 6,
    placeholder = 'Please Input',
    ...rest
  } = props;

  return (
    <>
      <FormControl error={error} fullWidth>
        {label ? <StyledInputLabel id={name}> {label}</StyledInputLabel> : null}
        <StyledTextArea
          id={name}
          minRows={minRows}
          hasError={error}
          placeholder={placeholder}
          {...rest}
        />
        {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
      </FormControl>
    </>
  );
};

export default TextArea;
