import React, { useState, useEffect, Fragment } from 'react';
import { Box, Typography } from '@mui/material';
import { Video } from './';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed: React.FC = () => {
  const [video, setVideo] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideo(data.items)
    );
  }, [searchTerm]);
  return (
    <Fragment>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white' }}
        >
          Search Result for :
          <span className='text-main-color'> {searchTerm}</span> video
        </Typography>
        <Video videos={video} />
      </Box>
    </Fragment>
  );
};

export default SearchFeed;
