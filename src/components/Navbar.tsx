import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '/youtube.svg';
import { Fragment } from 'react';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  return (
    <Fragment>
      <Stack
        direction='row'
        alignItems='center'
        p={2}
        sx={{
          position: 'sticky',
          background: '#000',
          top: 0,
          justifyContent: 'space-between',
        }}
      >
        <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt='logo' height={10} />
        </Link>
        <SearchBar />
      </Stack>
    </Fragment>
  );
};

export default Navbar;
