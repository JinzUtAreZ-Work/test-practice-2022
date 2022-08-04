import type { ReactElement } from 'react';
import type { Column, CellProps } from 'react-table';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const getExpanderColumn = <Type extends object>(): Column<Type> => ({
  id: 'expander',
  Cell: (cellProps: CellProps<Type>): ReactElement | null => {
    const { row } = cellProps;

    return row.canExpand ? (
      <span
        {...row.getToggleRowExpandedProps({
          style: {
            paddingLeft: `${row.depth * 2}rem`,
          },
        })}>
        {row.isExpanded ? <ExpandMoreIcon /> : <ChevronRightIcon />}
      </span>
    ) : null;
  },
});
