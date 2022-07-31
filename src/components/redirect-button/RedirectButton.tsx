import type { ReactElement } from 'react';
import type { NavigateOptions } from 'react-router-dom';
import type { ButtonProps } from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

interface RedirectButtonProps
  extends PropsWithChildren<Omit<ButtonProps, 'onClick'>> {
  to: string;
  navigateOptions?: NavigateOptions;
}
export const RedirectButton = (props: RedirectButtonProps): ReactElement => {
  const { to, navigateOptions, children, ...rest } = props;
  const navigate = useNavigate();

  const handleRedirect = (): void => {
    navigate(to, navigateOptions);
  };

  return (
    <Button {...rest} onClick={handleRedirect}>
      {children}
    </Button>
  );
};

export default RedirectButton;
