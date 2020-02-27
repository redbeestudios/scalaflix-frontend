import FilterHeader from './FilterHeader';
import React from 'react';
import VideoGridContainer from '../../containers/feed/VideoGridContainer';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    grid: {
        background: theme.palette.background.default,
        spacing:"2"
    }
}));

const Feed = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.grid} container justify="center">
            <Grid item xs={12} spacing={2}>
                <FilterHeader/>
            </Grid>
            <Grid item xs={7} spacing={2}>
                <VideoGridContainer/>
            </Grid>
        </Grid>
    );
};

export default Feed;
