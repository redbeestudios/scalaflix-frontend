import Grid from '@material-ui/core/Grid';
import React from 'react';
import Box from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  grid: {
    background: theme.palette.background.default,
    color: theme.palette.background.default,
    wrap:"nowrap"
  },
  box: {
    padding: theme.spacing(2),
    color: theme.palette.background.default,
    textAlign: 'center'
  },
  title: {
    textAlign: "center"
  },
  duration: {
    textAlign: "right"
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  }
}));


const FeedVideo = ({title, thumbnail, duration}) => {
  const classes = useStyles();
  return (
    <Grid className={classes.grid} item xs="3">
          <Box pr="2" className={classes.paper}>
            <Grid container xs spacing="1">
              <Grid item xs>
                <Typography className={classes.title} gutterBottom variant="body2">{title}</Typography>
              </Grid>
              <Grid item xs="12" justify="center">
                <img className={classes.img} src={thumbnail}/>
              </Grid>
              <Grid item xs>
                <Typography className={classes.duration}>{duration}</Typography>
              </Grid>
            </Grid>
          </Box>
            
    </Grid>
  );
}

export default FeedVideo;
