import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/utility/Routes';
import Navbar from './components/utility/Navbar';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {red, pink, deepPurple } from 'material-ui/colors';
import './scss/style.scss';

const accent = pink[900]; //#880E4F
const second = deepPurple[900];

const theme = createMuiTheme({
  palette: {
    primary: {
      ...pink,
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
