import type { ReactElement } from 'react';
import type { HeaderGroup } from 'react-table';

import { styled } from '@mui/material/styles';
import MuiTableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';

const StyledTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== 'isActionColumn',
})<{ isActionColumn: boolean }>(({ isActionColumn }) => ({
  border: 0,
  paddingBottom: 0,
  width: isActionColumn ? '2%' : undefined,
}));

interface HeaderProps<Type extends object> {
  headerGroups: HeaderGroup<Type>[];
}

export const Header = <Type extends object>(
  props: HeaderProps<Type>,
): ReactElement => {
  const { headerGroups } = props;

  return (
    <MuiTableHead>
      {headerGroups.map((headerGroup) => {
        const { key: headerGroupKey, ...restHeaderGroupProps } =
          headerGroup.getHeaderGroupProps();

        return (
          <TableRow {...restHeaderGroupProps} key={headerGroupKey}>
            {headerGroup.headers.map((column) => {
              const { key: headerKey, ...resetHeaderProps } =
                column.id === 'selection'
                  ? column.getHeaderProps()
                  : column.getHeaderProps(column.getSortByToggleProps());

              return (
                <StyledTableCell
                  {...resetHeaderProps}
                  key={headerKey}
                  isActionColumn={
                    column.id === 'selection' || column.id === 'expander'
                  }>
                  {column.render('Header')}
                  {column.canSort && column.id !== 'selection' && (
                    <TableSortLabel
                      active={column.isSorted}
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                    />
                  )}
                </StyledTableCell>
              );
            })}
          </TableRow>
        );
      })}
    </MuiTableHead>
  );
};

export default Header;
