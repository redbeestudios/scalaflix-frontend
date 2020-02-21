import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    background: theme.palette.background.default,
    color: theme.palette.background.default
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
}));

function App() {
  const classes = useStyles();
  return (
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid container spacing={1}>
          <Grid item xs={3} sm={3}><Paper className={classes.paper}>Video #1</Paper></Grid> 
          <Grid item xs={3} sm={3}><Paper className={classes.paper}>Video #2</Paper></Grid> 
          <Grid item xs={3} sm={3}><Paper className={classes.paper}>Video #3</Paper></Grid> 
          <Grid item xs={3} sm={3}><Paper className={classes.paper}>Video #4</Paper></Grid> 
          <Grid item xs={3} sm={3}><Paper className={classes.paper}>Video #5</Paper></Grid> 
          <Grid item xs={3} sm={3}><Paper className={classes.paper}>Video #6</Paper></Grid> 
          <Grid item xs={3} sm={3}><Paper className={classes.paper}>Video #7</Paper></Grid> 
          <Grid item xs={3} sm={3}><Paper className={classes.paper}>Video #8</Paper></Grid> 
          <Grid item xs={3} sm={3}><Paper className={classes.paper}>Video #9</Paper></Grid> 
          <Grid item xs={3} sm={3}><Paper className={classes.paper}>Video #10</Paper></Grid> 
          <Grid item xs={3} sm={3}><Paper className={classes.paper}>Video #11</Paper></Grid> 
          <Grid item xs={3} sm={3}><Paper className={classes.paper}>Video #11</Paper></Grid> 
          </Grid>
        </Container>
     </ThemeProvider>
  );
}

export default App;
