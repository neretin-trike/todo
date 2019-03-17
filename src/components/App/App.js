import React, { Component } from 'react';
import './App.css';
import * as ReactRouterDOM from "react-router-dom";

import Button from '@material-ui/core/Button';

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

    // this.onAddItem = this.onAddItem.bind(this);
  }

  render() {
    return (
      <div className="Container">
        <Button variant="contained" color="primary">
          Добавить
        </Button>
      </div>
    )
  }
}

export default App;
