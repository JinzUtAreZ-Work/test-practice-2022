import type { ReactElement, ReactNode } from 'react';
import type { IconName } from '~/components/svg-icon/types';

import { styled } from '@mui/material/styles';
import { paperClasses } from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { SvgIcon } from '~/components';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  width: 'auto',
  minWidth: theme.spacing(50),
  [`& .${paperClasses.root}`]: {
    borderRadius: theme.spacing(1),
  },
}));

const StyledDialogTitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: theme.spacing(3),
  color: theme.palette.independence.main,
}));

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(4),
  marginTop: theme.spacing(2),
}));

interface NotificationModalProps extends PropsWithChildren {
  isVisible: boolean;
  title?: ReactNode;
  icon?: IconName;
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
}

export const NotificationModal = (
  props: NotificationModalProps,
): ReactElement => {
  const {
    isVisible,
    title,
    icon,
    children,
    okText = 'Ok',
    cancelText = 'Cancel',
    onOk,
    onCancel,
  } = props;

  const renderDialogTitle = (): ReactNode => {
    if (typeof title === 'string') {
      return <StyledDialogTitleText>{title}</StyledDialogTitleText>;
    }
    return title;
  };

  const renderActionButtons = (): ReactNode => {
    return (
      <StyledDialogActions>
        <>
          {onCancel ? (
            <Button variant="outlined" color="secondary" onClick={onCancel}>
              {cancelText}
            </Button>
          ) : null}

          {onOk ? (
            <Button variant="contained" color="secondary" onClick={onOk}>
              {' '}
              {okText}{' '}
            </Button>
          ) : null}
        </>
      </StyledDialogActions>
    );
  };

  return (
    <StyledDialog open={isVisible} onClose={onCancel}>
      <DialogContent>
        <Stack gap={2}>
          <Stack
            direction="row"
            gap={2}
            alignItems="center"
            justifyContent="center">
            {icon ? <SvgIcon name={icon} size={7} /> : null}
            {renderDialogTitle()}
          </Stack>
          {children}
        </Stack>
        {renderActionButtons()}
      </DialogContent>
    </StyledDialog>
  );
};

export default NotificationModal;
