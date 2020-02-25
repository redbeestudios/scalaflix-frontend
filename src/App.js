import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import feed from './reducers/feed/feed';
import Feed from './components/feed/Feed';

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
    <Provider store = {createStore(feed)}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Feed />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
