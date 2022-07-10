import type { ReactElement } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { useAuthContext } from '~/contexts/auth-context';

const StyledContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto, 1fr)',
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  gridRow: '1 / 3',
  justifySelf: 'center',
  alignSelf: 'center',
  height: theme.spacing(4.5),
  width: theme.spacing(4.5),
  marginRight: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
}));

const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const StyledUsername = styled(StyledText)({
  gridRow: '1 / 1',
  gridColumn: '2 / 2',
});

const StyledDesignation = styled(StyledText)({
  gridRow: '2 / 2',
  gridColumn: '2 / 2',
});

export const UserMenu = (): ReactElement => {
  const { authUser } = useAuthContext();

  return (
    <StyledContainer>
      <StyledAvatar>
        <PersonOutlineIcon color="primary" />
      </StyledAvatar>
      <StyledUsername>{authUser?.name}</StyledUsername>
      <StyledDesignation variant="caption">{authUser?.role}</StyledDesignation>
    </StyledContainer>
  );
};

export default UserMenu;
