import React from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Fragment } from 'react';

const SearchBar: React.FC = () => {
  return (
    <Fragment>
      <Paper
        component='form'
        sx={{
          borderRadius: 20,
          border: '1px solid #e3e3e3',
          pl: 2,
          boxShadow: 'none',
          mr: { sm: 5 },
        }}
      >
        <input
          className='border-none outline-none w-[200px] sm:w-[350px]'
          placeholder='Search ...'
        />
        <IconButton
          type='submit'
          sx={{ p: '10px', color: 'red' }}
          aria-label='search'
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Fragment>
  );
};

export default SearchBar;
