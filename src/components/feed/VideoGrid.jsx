import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';
import FeedVideo from './FeedVideo';
import React from 'react';

const VideoGrid = ({ videos }) => (
    <ThemeProvider>
        <Container maxWidth="lg">
            <Grid container justify="left" spacing={1}>
                {videos.map (feedVideo =>
                    <FeedVideo
                        key={feedVideo.id}
                        {...feedVideo}
                    />
                )}
            </Grid>
        </Container>
    </ThemeProvider>
);

export default VideoGrid;
