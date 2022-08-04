import type { ReactElement } from 'react';
import type {
  Hooks,
  UseRowSelectInstanceProps,
  CellProps,
  TableInstance,
} from 'react-table';

import type {
  UpdateTableCellParams,
  UpdateTableCellInstance,
  UseDataTableParams,
} from '.';
import { useState, useEffect } from 'react';
import { useSticky } from 'react-table-sticky';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useRowSelect,
  useTable,
  useExpanded,
} from 'react-table';

import Checkbox from '@mui/material/Checkbox';

import DefaultCell from './components/default-cell/DefaultCell';

export const useCheckboxSelect = <Type extends object>(
  params: Hooks<Type>,
): Hooks<Type> => {
  const hooks = params;

  hooks.visibleColumns.push((visibleColumns) => [
    {
      id: 'selection',
      sticky: 'left',
      Header: ({
        getToggleAllRowsSelectedProps,
      }: UseRowSelectInstanceProps<Type>) => (
        <Checkbox {...getToggleAllRowsSelectedProps()} />
      ),
      Cell: ({ row }: CellProps<Type>): ReactElement => (
        <Checkbox {...row.getToggleRowSelectedProps()} />
      ),
    },
    ...visibleColumns,
  ]);

  return hooks;
};

export const useUpdateTableCell = <Type extends object>(
  data: Type[],
): UpdateTableCellInstance<Type> => {
  const [items, setItems] = useState<Type[]>(data);
  const [skipPageReset, setSkipPageReset] = useState(false);

  const onUpdateTableCell = (params: UpdateTableCellParams): void => {
    const { rowIndex, columnId, value } = params;
    setSkipPageReset(true);

    setItems((oldItems) =>
      oldItems.map((oldItem, index) => {
        if (index === rowIndex) {
          return {
            ...oldItems[rowIndex],
            [columnId]: value,
          };
        }
        return oldItem;
      }),
    );
  };

  useEffect(() => {
    setSkipPageReset(false);
  }, [items]);

  return {
    data: items,
    skipPageReset,
    onUpdateTableCell,
  };
};

export const useDataTable = <Type extends object>(
  params: UseDataTableParams<Type>,
): TableInstance<Type> => {
  const {
    data = [],
    columns,
    pagination,
    skipPageReset,
    checkboxSelection,
    defaultPageSize = 50,
    onUpdateTableCell,
  } = params;

  const tableInstance = useTable<Type>(
    {
      data,
      columns,
      manualGlobalFilter: true,
      paginateExpandedRows: false,
      defaultColumn: { Cell: DefaultCell },
      initialState: {
        pageIndex: 0,
        pageSize: pagination ? defaultPageSize : data.length,
      },
      autoResetPage: !skipPageReset,
      onUpdateTableCell,
    },
    useGlobalFilter,
    useSortBy,
    useSticky,
    useExpanded,
    usePagination,
    useRowSelect,
    ...(checkboxSelection ? [useCheckboxSelect] : []),
  );
  return tableInstance;
};
