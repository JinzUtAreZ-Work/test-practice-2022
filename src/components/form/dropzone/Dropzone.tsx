import type { ReactElement } from 'react';
import type { BaseInputProps } from '../types';

import { toArray } from 'lodash';
import { useDropzone } from 'react-dropzone';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { getFilenameWithoutExtension } from '~/utils';

const StyledContainer = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop != 'hasError';
  },
})<{ hasError?: boolean }>(({ hasError, theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.25rem',
    padding: '2rem',
    backgroundColor: '#fafafa',
    cursor: 'pointer',
    borderRadius: 5,
    border: `2px dashed ${
      hasError ? theme.palette.error.main : theme.palette.text.secondary
    }`,
  };
});

const StyledContent = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '20% 100%',
  gridTemplateRows: 'repeat(2, 1fr)',
});

const StyledUploadIcon = styled(AddCircleIcon, {
  shouldForwardProp: (prop) => {
    return prop !== 'hasError';
  },
})<{ hasError?: boolean }>(({ hasError, theme }) => {
  return {
    height: '3.5rem',
    width: '3.5rem',
    gridRow: '1 / 4',
    alignSelf: 'center',
    justifySelf: 'flex-end',
    marginRight: '0.5rem',
    color: hasError ? theme.palette.error.main : theme.palette.primary.main,
  };
});

const StyledTitle = styled(Typography)({
  fontSize: '1.25rem',
});

const StyledPrimaryText = styled('span')(({ theme }) => {
  return {
    display: 'inline',
    fontSize: '1.25rem',
    color: theme.palette.primary.main,
  };
});

const StyledSubTitle = styled(Typography)({
  color: '#000000',
  opacity: 0.45,
});

const StyledErrorMessage = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.error.main,
  };
});

interface DropzoneProps extends Omit<BaseInputProps, 'label'> {
  multiple?: boolean;
  allowedExtensions?: string[];
  onChange?: (event: File[]) => void;
}

export const Dropzone = (props: DropzoneProps): ReactElement => {
  const {
    name,
    error,
    helperText,
    multiple = true,
    allowedExtensions = ['.png', '.jpg', 'jpeg', '.pdf'],
    onChange,
  } = props;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple,
    onDrop: (files) => {
      return onChange ? onChange(files) : undefined;
    },
  });

  const rootProps = getRootProps();
  const inputProps = getInputProps({
    onChange: (event) => {
      return onChange ? onChange(toArray(event.target.files)) : undefined;
    },
  });

  const getSupportedFileTypes = (): string => {
    return allowedExtensions
      .map((extension) => {
        return getFilenameWithoutExtension(extension);
      })
      .join(', ');
  };

  return (
    <StyledContainer {...rootProps} hasError={error}>
      <input
        {...inputProps}
        data-testid={name}
        accept={getSupportedFileTypes()}
      />
      <StyledContent>
        <StyledUploadIcon hasError={error} />
        {isDragActive ? (
          <StyledTitle>Drop the files here ...</StyledTitle>
        ) : (
          <StyledTitle>
            Drag and Drop here or
            <StyledPrimaryText>Browse File</StyledPrimaryText>
          </StyledTitle>
        )}
        <StyledSubTitle>
          Supported File Types: {getSupportedFileTypes()}
          {error ? (
            <StyledErrorMessage role="alert" aria-label={helperText}>
              {helperText}
            </StyledErrorMessage>
          ) : null}
        </StyledSubTitle>
      </StyledContent>
    </StyledContainer>
  );
};

export default Dropzone;
