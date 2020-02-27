import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import feed from './reducers/feed/feed';
import Feed from './components/feed/Feed';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));
  

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Provider store = {createStore(feed)}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Feed />
      </ThemeProvider>
    </Provider>
    </div>
  );
}

export default App;
