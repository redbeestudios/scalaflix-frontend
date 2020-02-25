import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FeedVideo from './FeedVideo';
import React from 'react';

const VideoGrid = ({ videos }) => (
    <Container maxWidth="sm">
        <Grid container spacing={1}>
            {videos.map (feedVideo =>
                <FeedVideo
                    key={feedVideo.id}
                    {...feedVideo}
                />
            )}
        </Grid>
    </Container>
);

export default VideoGrid;
