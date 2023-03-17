import React, { Fragment } from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';
import { VideoI } from '../interfaces/video';

const Video: React.FC<VideoI> = ({ videos, direction }) => {
  return (
    <Fragment>
      <Stack
        direction={direction || 'row'}
        flexWrap='wrap'
        justifyContent='start'
        gap={5}
      >
        {videos.map((item: any, idx: number) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && (
              <ChannelCard channelDetail={item} videos={[]} />
            )}
          </Box>
        ))}
      </Stack>
    </Fragment>
  );
};

export default Video;
