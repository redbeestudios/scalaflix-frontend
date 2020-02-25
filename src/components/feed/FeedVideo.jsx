import Grid from '@material-ui/core/Grid';
import React from 'react';
import Paper from '@material-ui/core/Paper';
const FeedVideo = ({title, thumbnail, duration}) => (
  <Grid item xs={3}>
        <Paper>
            <h1>{title}</h1>
            <img src={thumbnail}/>
            <h3>{duration}</h3>
        </Paper>
  </Grid>
)

export default FeedVideo;
