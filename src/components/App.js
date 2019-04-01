import React, { Component, Children } from 'react';
import * as ReactRouterDOM from "react-router-dom";
import './App.css';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { PALETE } from '../constants/config.js';
import { loginUser} from "../api/apiManager";

import Title from './common/Title';
import AddButton from './common/AddButton';
import TaskTable from './task/list/TaskTable';
import AddTaskCard from './task/creator/AddTaskCard';
import ViewTaskCard from './task/viewer/ViewTaskCard';

import { Provider } from 'react-redux';
import store from '../store';

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const Link = ReactRouterDOM.Link;
const Redirect = ReactRouterDOM.Redirect;

const theme = createMuiTheme(PALETE);

class App extends Component {
  componentDidMount() {
    let data = {'username':"trike",'password':"123456"};
    loginUser(data).
      then( json => {
        localStorage.setItem("token", json.token);

        
      }, 
      err => alert(err) );
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <main className="container App">
            <Title />
            <AddButton />
            <TaskTable />
            <AddTaskCard />
            <ViewTaskCard />
          </main>
        </MuiThemeProvider>
      </Provider>

    )
  }
}

export default App;
