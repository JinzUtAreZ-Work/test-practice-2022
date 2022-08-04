import type { ReactElement } from 'react';

import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';

interface HiddenLoadingTextProps {
  isLoading: boolean;
}

export const HiddenLoadingText = (
  props: HiddenLoadingTextProps,
): ReactElement | null => {
  const { isLoading } = props;

  if (isLoading) return null;

  return <Box sx={visuallyHidden}> Loading... </Box>;
};

export default HiddenLoadingText;
