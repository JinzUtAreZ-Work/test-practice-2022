import type { ReactElement, ChangeEvent } from 'react';

import { useState } from 'react';
import { useDebounce, useEffectOnce } from 'react-use';
import { styled } from '@mui/material/styles';
import MuiInputBase, { inputBaseClasses } from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const StyledContainer = styled('div')(({ theme }) => {
  return {
    position: 'relative',
    color: theme.palette.text.primary,
    border: '1px solid',
    borderColor: theme.palette.grey[400],
    borderRadius: '50rem',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 'auto',
  };
});

const StyledIconContainer = styled('div')(({ theme }) => {
  return {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
});

const InputBase = styled(MuiInputBase)(({ theme }) => {
  return {
    color: 'inherit',
    maxWidth: theme.spacing(25),
    borderRadius: theme.spacing(6.25),
    [`& .${inputBaseClasses.input}`]: {
      padding: theme.spacing(0.5),
      paddingLeft: `calc(1em + ${theme.spacing(3)})`,
      transition: theme.transitions.create('width'),
    },
  };
});

interface QuickSearchProps {
  setGlobalFilter: (value: string) => void;
}

export const QuickSearch = (props: QuickSearchProps): ReactElement => {
  const { setGlobalFilter } = props;
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const [, cancel] = useDebounce(
    () => {
      setGlobalFilter(value);
    },
    300,
    [value],
  );

  useEffectOnce(() => {
    cancel();
  });

  return (
    <StyledContainer>
      <StyledIconContainer>
        <SearchIcon color="action" fontSize="small" />
      </StyledIconContainer>
      <InputBase
        placeholder="Quick Search"
        size="small"
        onChange={handleChange}
      />
    </StyledContainer>
  );
};

export default QuickSearch;
