import React from 'react';
import { Fragment } from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';
import { VideoI, VideoItem } from '../interfaces/video';

const Video: React.FC<VideoI> = ({ videos }) => {
  return (
    <Fragment>
      <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
        {videos.map((item: VideoItem, idx: number) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard videoId={item.id.videoId} />}
            {item.id.channelId && <ChannelCard channelId={item.id.channelId} />}
          </Box>
        ))}
      </Stack>
    </Fragment>
  );
};

export default Video;
