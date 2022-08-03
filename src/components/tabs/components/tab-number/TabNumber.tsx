import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const TabNumber = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(3),
  color: theme.palette.common.white,
}));

export default TabNumber;
