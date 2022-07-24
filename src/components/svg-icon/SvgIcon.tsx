import type { ReactElement } from 'react';
import type { IconName } from './types';

import { styled } from '@mui/material';
import MuiSvgIcon from '@mui/material/SvgIcon';

const StyledSvgIcon = styled(MuiSvgIcon, {
  shouldForwardProp: (prop) => prop !== 'size',
})<{ size: number }>(({ size, theme }) => ({
  fontSize: theme.spacing(size),
}));

interface SvgIconProps {
  name: IconName;
  size?: number;
  color?: Exclude<MuiColor, 'default'> | 'inherit';
}

export const SvgIcon = (props: SvgIconProps): ReactElement => {
  const { name, size = 4, color = 'primary' } = props;

  return (
    <StyledSvgIcon size={size} color={color}>
      <svg aria-hidden={true}>
        <use href={`#icon-${name}`} />
      </svg>
    </StyledSvgIcon>
  );
};

export default SvgIcon;
