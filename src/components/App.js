import React, { Component, Children } from 'react';
import * as ReactRouterDOM from "react-router-dom";
import './App.css';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

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

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#3d5afe',
      dark: '#536dfe',
    }, 
    secondary: {
      main: '#3d5afe',
      light: '#536dfe',
    },
  },
});

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
    // const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <main className="Container App">
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
