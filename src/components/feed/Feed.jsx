import FilterHeader from './FilterHeader';
import React from 'react';
import VideoGridContainer from '../../containers/feed/VideoGridContainer';
import Container from '@material-ui/core/Container';

const Feed = () => (
    <Container maxWidth="sm">
        <FilterHeader/>
        <VideoGridContainer/>
    </Container>
);

export default Feed;
