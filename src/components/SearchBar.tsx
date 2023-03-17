import React, { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

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
        onSubmit={handleSubmit}
      >
        <input
          className='border-none outline-none w-[200px] sm:w-[350px]'
          placeholder='Search ...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
