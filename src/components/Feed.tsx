import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Video } from './';
import { Fragment } from 'react';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('New');
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideo(data.items)
    );
  }, [selectedCategory]);
  return (
    <Fragment>
      <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
        <Box
          sx={{
            height: { sx: 'auto', md: '92vh' },
            borderRight: '1px solid #3d3d3d',
            px: { sx: 0, md: 2 },
          }}
        >
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography
            variant='body2'
            sx={{ mt: { sx: 2, md: 1.5 }, color: '#fff' }}
          >
            Copyright © 2023
          </Typography>
        </Box>
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <Typography
            variant='h4'
            fontWeight='bold'
            mb={2}
            sx={{ color: 'white' }}
          >
            {selectedCategory}
            <span className='text-main-color'> videos</span>
          </Typography>
          <Video videos={video} />
        </Box>
      </Stack>
    </Fragment>
  );
};

export default Feed;
