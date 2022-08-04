import type { ReactElement } from 'react';

import { styled } from '@mui/material/styles';

const StyledContainer = styled('div')({
  position: 'absolute',
  top: '65%',
  left: '50%',
  transform: 'translate(-65%, -50%)',
  whiteSpace: 'nowrap',
});

interface NoDataProps {
  isVisible?: boolean;
}

export const NoData = (props: NoDataProps): ReactElement | null => {
  const { isVisible = false } = props;

  if (!isVisible) return null;

  return <StyledContainer>No data found</StyledContainer>;
};

export default NoData;
