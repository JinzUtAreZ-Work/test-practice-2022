import { styled } from '@mui/material/styles';

interface DrawerContentProps {
  isOpen: boolean;
}

const DrawerContent = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<DrawerContentProps>(({ isOpen, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  overflowY: 'auto',
  whiteSpace: isOpen ? 'break-spaces' : 'unset',
  marginTop: theme.spacing(1),
}));

export default DrawerContent;
