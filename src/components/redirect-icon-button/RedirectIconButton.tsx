import type { ReactElement } from 'react';
import type { NavigateOptions } from 'react-router-dom';
import type { IconButtonProps } from '@mui/material/IconButton';

import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

interface RedirectIconButton
  extends PropsWithChildren<Omit<IconButtonProps, 'onClick'>> {
  to: string;
  navigateOptions?: NavigateOptions;
}
export const RedirectIconButton = (props: RedirectIconButton): ReactElement => {
  const { to, navigateOptions, children, ...rest } = props;
  const navigate = useNavigate();

  const handleRedirect = (): void => {
    navigate(to, navigateOptions);
  };

  return (
    <IconButton {...rest} onClick={handleRedirect}>
      {children}
    </IconButton>
  );
};

export default RedirectIconButton;
