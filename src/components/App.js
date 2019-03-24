import React, { Component, Children } from 'react';
import * as ReactRouterDOM from "react-router-dom";
import './App.css';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { PALETE } from '../constants/config.js';

import Title from './common/Title';
import AddButton from './common/AddButton';
import TaskTable from './task/list/TaskTable';
import AddTaskCard from './task/creator/AddTaskCard';
import ViewTaskCard from './task/viewer/ViewTaskCard';

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const Link = ReactRouterDOM.Link;
const Redirect = ReactRouterDOM.Redirect;

const theme = createMuiTheme(PALETE);

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
        <main className="container App">
          <Title />
          <AddButton />
          <TaskTable />
          <AddTaskCard />
          <ViewTaskCard />
        </main>
      </MuiThemeProvider>
    )
  }
}

export default App;
