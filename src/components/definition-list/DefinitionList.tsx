import type { ReactElement } from 'react';

import { v4 as uuidv4 } from 'uuid';
import flattenChildren from 'react-keyed-flatten-children';
import Grid from '@mui/material/Grid';

interface DefinitionListProps extends PropsWithChildren {
  xs?: number;
  spacing?: number;
}

const DefinitionList = (props: DefinitionListProps): ReactElement => {
  const { xs = 3, spacing = 2, children } = props;

  return (
    <Grid container component="dl" spacing={spacing}>
      {flattenChildren(children).map((child) => {
        return (
          <Grid item key={uuidv4()} xs={xs}>
            {child}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DefinitionList;
