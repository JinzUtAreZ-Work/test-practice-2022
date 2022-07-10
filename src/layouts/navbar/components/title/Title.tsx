import type { ReactElement } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const StyledPortalName = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const StyledTypography = styled(Typography)(() => ({
  color: 'inherit',
  lineHeight: 1,
}));

export const Title = (): ReactElement => (
  <StyledContainer>
    <StyledTypography variant="h5" fontWeight="bold" fontStyle="italic">
      eMPF
    </StyledTypography>
    <StyledPortalName>
      <StyledTypography variant="caption">ADMINISTRATION</StyledTypography>
      <StyledTypography variant="caption">PORTAL</StyledTypography>
    </StyledPortalName>
  </StyledContainer>
);

export default Title;
