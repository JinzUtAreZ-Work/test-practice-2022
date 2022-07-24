import { styled } from '@mui/material/styles';

interface DrawerContentProps {
  isOpen: boolean;
}

export const DrawerContent = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<DrawerContentProps>(({ isOpen, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  whiteSpace: isOpen ? 'break-spaces' : 'unset',
  marginTop: theme.spacing(6),
  maxHeight: '75vh',
  overflowY: 'auto',
  overflowX: 'hidden',
}));

export default DrawerContent;
