import type { ReactElement } from 'react';
import type { Row } from 'react-table';

import { styled } from '@mui/material/styles';
import MuiTableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const StyledStripeRow = styled(TableRow, {
  shouldForwardProp: (prop) => {
    return prop !== 'striped';
  },
})<{ striped?: boolean }>(({ striped }) => {
  return {
    '&:nth-of-type(odd)': {
      backgroundColor: striped ? '#F9FCFF' : 'inherit',
    },
  };
});

const StyledCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== 'hasSubRows',
})<{ hasSubRows: boolean }>(({ hasSubRows, theme }) => ({
  color: hasSubRows ? theme.palette.info.main : undefined,
}));

interface BodyProps<Type extends object> {
  striped?: boolean;
  page: Row<Type>[];
  prepareRow: (row: Row<Type>) => void;
}

export const Body = <Type extends object>(
  props: BodyProps<Type>,
): ReactElement => {
  const { striped, page, prepareRow } = props;
  return (
    <MuiTableBody>
      {page.map((row) => {
        prepareRow(row);
        const { key: rowKey, ...restRowProps } = row.getRowProps();

        return (
          <StyledStripeRow {...restRowProps} key={rowKey} striped={striped}>
            {row.cells.map((cell) => {
              const { key: cellKey, ...restCellProps } = cell.getCellProps();

              return (
                <StyledCell
                  {...restCellProps}
                  key={cellKey}
                  hasSubRows={Boolean(row.subRows?.length)}>
                  {cell.render('Cell')}
                </StyledCell>
              );
            })}
          </StyledStripeRow>
        );
      })}
    </MuiTableBody>
  );
};

export default Body;
