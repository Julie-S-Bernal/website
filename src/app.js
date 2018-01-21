import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/utility/Routes';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {red, indigo } from 'material-ui/colors';
import './scss/style.scss';

const accent = indigo[500]; //#3F51B5
const second = red[900];

const theme = createMuiTheme({
  palette: {
    primary: {
      ...indigo,
      500: accent
    },// Purple and green play nicely together.
    secondary: {
      ...red,
      900: second
    },
    error: red
  }
});

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="container">
            <main>
              <Routes />
            </main>
          </div>
        </Router>
        </MuiThemeProvider>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
