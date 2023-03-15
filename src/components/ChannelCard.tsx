import React from 'react';
import { Fragment } from 'react';
import { VideoI } from '../interfaces/video';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoProfilePicture } from '../utils/constants';
import { Link } from 'react-router-dom';

const ChannelCard: React.FC<VideoI> = ({ channelDetail }) => {
  return (
    <Fragment>
      <Box
        sx={{
          boxShadow: 'none',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: '365px', md: '320px' },
          height: '326px',
          margin: 'auto',
        }}
      >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <CardMedia
              image={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              sx={{
                borderRadius: '50%',
                height: '180px',
                width: '180px',
                mb: 2,
                border: '1px solid #e3e3e3',
              }}
            />
            <Typography variant='h6'>
              {channelDetail?.snippet?.title}
              <CheckCircleIcon sx={{ fontSize: 14, color: 'gray' }} />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography
                sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}
              >
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString('en-US')}
                Subscribers
              </Typography>
            )}
          </CardContent>
        </Link>
      </Box>
    </Fragment>
  );
};

export default ChannelCard;
