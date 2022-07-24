import type { ReactElement } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

import { useRoutesByLocation } from '~/routes';

const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginLeft: theme.spacing(12),
}));

const StyledArrowIcon = styled(ArrowDropDownCircleOutlinedIcon)(
  ({ theme }) => ({
    height: theme.spacing(3),
    width: theme.spacing(3),
    transform: 'rotate(90deg)',
  }),
);

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const SiteMap = (): ReactElement | null => {
  const currentRoutes = useRoutesByLocation();
  if (!currentRoutes.length) return null;

  return (
    <StyledContainer aria-label="sitemap" color="inherit">
      <StyledArrowIcon />
      <StyledBreadcrumbs aria-label="route paths">
        {currentRoutes.map((currentRoute) => {
          return <Typography key={uuidv4()}>{currentRoute?.label}</Typography>;
        })}
      </StyledBreadcrumbs>
    </StyledContainer>
  );
};

export default SiteMap;
