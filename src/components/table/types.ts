import type { Column } from 'react-table';

export type PaginationPosition = 'top' | 'bottom';

export interface UpdateTableCellParams {
  rowIndex: number;
  columnId: string;
  value: unknown;
}

export type UpdateTableCellFunction = (params: UpdateTableCellParams) => void;

export interface UpdateTableCellInstance<Type extends object> {
  data: Type[];
  skipPageReset: boolean;
  onUpdateTableCell: UpdateTableCellFunction;
}

export interface UseDataTableParams<Type extends object> {
  data?: Type[];
  columns: Column<Type>[];
  defaultPageSize?: number;
  pagination?: boolean;
  skipPageReset?: boolean;
  checkboxSelection?: boolean;
  onUpdateTableCell?: UpdateTableCellFunction;
}
