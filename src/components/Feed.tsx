import React from 'react';
import { Fragment } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';

const Feed: React.FC = () => {
  return (
    <Fragment>
      <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
        <Box
          sx={{
            height: { sx: 'auto', md: '92vh' },
            borderRight: { sx: 'none', md: '1px solid #3d3d3d' },
            px: { sx: 0, md: 2 },
            pb: { sx: 2, md: 0 },
            width: { sx: '100%', md: 'auto' },
          }}
        >
          <Sidebar />
          <Box
            sx={{
              width: { sx: '100%', md: 'auto' },
              pt: { sx: 2, md: 0 },
              pl: { sx: 2, md: 0 },
            }}
          >
            <Typography
              variant='body2'
              sx={{ mt: { sx: 2, md: 1.5 }, color: '#fff' }}
            >
              Copyright © 2023
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Fragment>
  );
};

export default Feed;
