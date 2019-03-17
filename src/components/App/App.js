import React, { Component } from 'react';
import './App.css';

import * as ReactRouterDOM from "react-router-dom";
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const Link = ReactRouterDOM.Link;
const Redirect = ReactRouterDOM.Redirect;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      filterText: ""
    };

    this.onClickHandle = this.onClickHandle.bind(this);
  }

  onClickHandle(e) {
    console.log("Произошёл клик"); 
   }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="Container">
          <Button onClick={this.onClickHandle} variant="outlined" color="secondary">Добавить</Button>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
