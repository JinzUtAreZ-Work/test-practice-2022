import type { ReactElement } from 'react';
import type { ContainerProps } from '@mui/material/Container';

import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

type PageContainerProps = ContainerProps;

export const PageContainer = (props: PageContainerProps): ReactElement => {
  return <StyledContainer {...props} />;
};

export default PageContainer;
