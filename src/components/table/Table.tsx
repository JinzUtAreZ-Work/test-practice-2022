import type { ReactElement, ReactNode } from 'react';
import type { PaginationPosition, UseDataTableParams } from '.';

import { styled } from '@mui/material/styles';
import MuiTable from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useDataTable } from './hooks';
import {
  NoData,
  Header,
  Body,
  QuickSearch,
  Scrollbar,
  Pagination,
  Spinner,
} from './components';

const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const StyledActionContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
});

// const StyledHeaderContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: theme.spacing(2),
//   marginBottom: theme.spacing(2),
// }));

// const StyledFooterContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: theme.spacing(2),
//   margin: theme.spacing(3),
// }));

const StyledTable = styled(MuiTable, {
  shouldForwardProp: (prop) => {
    return prop !== 'isLoading';
  },
})<{ isLoading?: boolean }>(({ isLoading, theme }) => {
  return {
    '& [data-sticky-td]': {
      position: !isLoading ? 'sticky' : undefined,
    },
    '& [data-sticky-last-left-td]': {
      backgroundColor: !isLoading ? theme.palette.common.white : undefined,
    },
    '& [data-sticky-first-right-td]': {
      backgroundColor: !isLoading ? theme.palette.common.white : undefined,
    },
    '& > thead > tr > th, td': {
      whiteSpace: 'nowrap',
      '&:first-of-type': {
        paddingLeft: 0,
        paddingRight: 0,
      },
      '&:last-of-type': {
        paddingRight: 0,
      },
    },
  };
});

const StyledPageSizeText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive, theme }) => ({
  fontWeight: 'bold',
  cursor: 'pointer',
  color: isActive ? theme.palette.secondary.main : undefined,
}));

interface TableProps<Type extends object> extends UseDataTableParams<Type> {
  name: string;
  striped?: boolean;
  isLoading?: boolean;
  quickSearch?: boolean;
  paginationPositions?: PaginationPosition[];
  actions?: ReactNode;
  metaData?: ReactNode;
  footer?: ReactNode;
}

export const Table = <Type extends object>(
  props: TableProps<Type>,
): ReactElement => {
  const {
    name,
    columns,
    data = [],
    striped,
    isLoading,
    checkboxSelection = true,
    pagination = true,
    quickSearch = true,
    skipPageReset,
    paginationPositions = ['top'],
    actions,
    metaData,
    footer,
    onUpdateTableCell,
  } = props;

  const {
    getTableProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useDataTable<Type>({
    data,
    columns,
    pagination,
    skipPageReset,
    checkboxSelection,
    onUpdateTableCell,
  });

  const renderMetaData = (): ReactNode => {
    if (!metaData) return null;

    return <Box>{metaData}</Box>;
  };

  const renderActions = (): ReactNode => {
    if (!actions) return null;

    return (
      <Stack direction="row" alignItems="center" gap={2}>
        {actions}
      </Stack>
    );
  };

  const renderQuickSearch = (): ReactNode => {
    if (!quickSearch) return null;
    return <QuickSearch setGlobalFilter={setGlobalFilter} />;
  };

  const renderPageSizeChanger = (): ReactNode => {
    return (
      <Stack direction="row" gap={1}>
        <Typography variant="body2" fontWeight="bold">
          Items Per Page
        </Typography>
        {[50, 100, 150].map((size) => (
          <StyledPageSizeText
            key={size}
            variant="body2"
            isActive={size === pageSize}
            onClick={() => setPageSize(size)}>
            {size}
          </StyledPageSizeText>
        ))}
      </Stack>
    );
  };

  const renderPagination = (): ReactNode => {
    if (!pagination) return null;

    return (
      <Pagination
        pageIndex={pageIndex}
        pageSize={pageSize}
        totalRows={data.length}
        isNextEnabled={canNextPage}
        isPreviousEnabled={canPreviousPage}
        onNext={nextPage}
        onPrevious={previousPage}
      />
    );
  };

  const renderActionFilters = (): ReactNode => {
    if (!actions && !pagination && !quickSearch) {
      return null;
    }
    return (
      <StyledActionContainer>
        {renderActions()}
        <Stack
          direction="row"
          display="flex"
          alignItems="center"
          gridColumn="2 / 2">
          {renderQuickSearch()}
        </Stack>
        {paginationPositions?.includes('top') ? (
          <Stack>
            {renderPageSizeChanger()}
            {renderPagination()}
          </Stack>
        ) : null}
      </StyledActionContainer>
    );
  };

  return (
    <StyledContainer>
      {renderMetaData()}
      {renderActionFilters()}
      <Box position="relative">
        <Scrollbar>
          <StyledTable
            {...getTableProps()}
            size="small"
            aria-label={name}
            isLoading={isLoading}>
            <Header<Type> headerGroups={headerGroups} />
            <Body<Type>
              striped={isLoading ? false : striped}
              page={page}
              prepareRow={prepareRow}
            />
          </StyledTable>
        </Scrollbar>
        <Spinner isVisible={isLoading} />
        <NoData isVisible={page.length === 0} />
      </Box>
      {footer}
      {paginationPositions?.includes('bottom') ? (
        <Stack alignSelf="center">{renderPagination()}</Stack>
      ) : null}
    </StyledContainer>
  );
};

export default Table;
