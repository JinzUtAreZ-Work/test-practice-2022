import type { ReactElement, ReactNode, MouseEvent } from 'react';
import type { PaginationRenderItemParams } from '@mui/material';
import type { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions';

import { styled } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';
import MuiPagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const StyledTablePagination = styled(TablePagination)({
  justifyContent: 'flex-end',
}) as typeof TablePagination;

const StyledPaginationItem = styled(PaginationItem)(({ theme, type }) => {
  return {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    lineHeight: 'inherit',
    height: 25,
    ...(type === 'page' && {
      backgroundColor: 'transparent !important',
      color: theme.palette.grey[400],
      fontWeight: theme.typography.fontWeightBold,
      border: '1px solid',
      borderColor: theme.palette.grey[400],
      pointerEvents: 'none',
    }),
    '&:hover': {
      backgroundColor: theme.palette.grey[400],
    },
  };
});

interface PaginationProps {
  pageIndex: number;
  pageSize: number;
  totalRows?: number;
  isNextEnabled: boolean;
  isPreviousEnabled: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

export const Pagination = (props: PaginationProps): ReactElement => {
  const {
    pageIndex,
    pageSize,
    isNextEnabled,
    isPreviousEnabled,
    totalRows = 0,
    onPrevious,
    onNext,
  } = props;

  const handlePageChange = (
    // eslint-disable-next-line no-unused-vars
    _event: MouseEvent<HTMLButtonElement> | null,
    // eslint-disable-next-line no-unused-vars
    _page: number,
  ): void => {
    return;
  };

  const renderPaginationAction = (
    actionProps: TablePaginationActionsProps,
  ): ReactElement => {
    const { onPageChange } = actionProps;

    const renderPageItem = (item: PaginationRenderItemParams): ReactNode => {
      const page = pageIndex + 1;

      if (item.type === 'previous') {
        return (
          <StyledPaginationItem
            {...item}
            onClick={onPrevious}
            disabled={!isPreviousEnabled}>
            <ArrowLeftIcon />
          </StyledPaginationItem>
        );
      }

      if (item.type === 'next') {
        return (
          <StyledPaginationItem
            {...item}
            onClick={onNext}
            disabled={!isNextEnabled}>
            <ArrowRightIcon />
          </StyledPaginationItem>
        );
      }

      if (item.type === 'page' && item.selected === true) {
        return <StyledPaginationItem {...item} page={page} />;
      }

      if (item.page === 1 && item.page === page) {
        return <StyledPaginationItem {...item} page={1} />;
      }

      return null;
    };

    return (
      <MuiPagination
        count={totalRows}
        page={pageIndex}
        onChange={(_event, page) => {
          onPageChange(null, page);
        }}
        renderItem={renderPageItem}
      />
    );
  };

  return (
    <StyledTablePagination
      component="div"
      labelDisplayedRows={({ to, count }) => {
        return `${to} of ${count}`;
      }}
      count={totalRows}
      rowsPerPage={pageSize}
      page={pageIndex}
      onPageChange={handlePageChange}
      ActionsComponent={renderPaginationAction}
    />
  );
};

export default Pagination;
