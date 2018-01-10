import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/utility/Routes';
import Navbar from './components/utility/Navbar';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {red, pink, deepPurple,purple } from 'material-ui/colors';
import './scss/style.scss';

const accent = purple[900]; //#4A148C
const second = deepPurple[900];

const theme = createMuiTheme({
  palette: {
    primary: {
      ...purple,
      900: accent
    },// Purple and green play nicely together.
    secondary: {
      ...deepPurple,
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
              <Navbar />
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
