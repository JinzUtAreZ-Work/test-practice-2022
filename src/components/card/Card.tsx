import type { ReactElement, ReactNode } from 'react';
import type { SxProps } from '@mui/material';

import { styled } from '@mui/material';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const StyledHeader = styled(CardHeader)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
  };
});

interface CardProps extends PropsWithChildren {
  sx?: SxProps;
  title?: ReactNode;
  action?: ReactNode;
  footer?: ReactNode;
}

export const Card = (props: CardProps): ReactElement => {
  const { sx, title, action, footer, children } = props;

  return (
    <MuiCard sx={sx}>
      <StyledHeader title={title} action={action} />
      <CardContent>{children}</CardContent>
      {footer ? <CardContent>{footer} </CardContent> : null}
    </MuiCard>
  );
};

export default Card;
