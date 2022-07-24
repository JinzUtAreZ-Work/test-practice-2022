import { styled } from '@mui/material';
import Button from '@mui/material/Button';

export const ColossalButton = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  fontSize: theme.spacing(3.125),
  width: theme.spacing(37.5),
  height: theme.spacing(19.5),
}));

export default ColossalButton;
