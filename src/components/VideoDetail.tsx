import React, { useState, useEffect, Fragment } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { VideoDetailI } from '../interfaces/video';

import Video from './Video';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail: React.FC = () => {
  const [videoDetail, setVideoDetail] = useState<VideoDetailI | null>(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  const title = videoDetail?.snippet?.title;
  const channelId = videoDetail?.snippet?.channelId;
  const channelTitle = videoDetail?.snippet?.channelTitle;
  const viewCount = videoDetail?.statistics?.viewCount;
  const likeCount = videoDetail?.statistics?.likeCount;

  return (
    <Fragment>
      <Box minHeight='95vh'>
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Box flex={1}>
            <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className='w-full'
                style={{ height: '50vh' }}
                controls
              />
              <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                {title}
              </Typography>
              <Stack
                direction='row'
                justifyContent='space-between'
                sx={{ color: '#fff' }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography variant='subtitle1' color='#fff'>
                    {channelTitle}
                    <CheckCircle
                      sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                    />
                  </Typography>
                </Link>
                <Stack direction='row' gap='20px' alignItems='center'>
                  <Typography variant='body1' sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant='body1' sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent='center'
            alignItems='center'
          >
            <Video videos={videos} direction='column' />
          </Box>
        </Stack>
      </Box>
    </Fragment>
  );
};

export default VideoDetail;
