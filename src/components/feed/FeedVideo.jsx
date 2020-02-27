import Grid from '@material-ui/core/Grid';
import React from 'react';
import Box from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    background: theme.palette.background.default,
    color: theme.palette.background.default,
    wrap:"nowrap"
  },
  button: {
    margin: theme.spacing(3)
  },
  box: {
    color: theme.palette.background.default,
    padding: theme.spacing(2),
    textAlign: 'center'
  },
}));


const FeedVideo = ({title, thumbnail, duration}) => {
  const classes = useStyles();
  return (
    <Grid className={classes.grid} item xs={3}>
          <Box pr="2" className={classes.paper}>
              <Typography gutterBottom variant="body2">{title}</Typography>
              <img src={thumbnail}/>
              <h3>{duration}</h3>
          </Box>
    </Grid>
  );
}

export default FeedVideo;
