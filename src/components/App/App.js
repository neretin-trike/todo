import React, { Component } from 'react';
import './App.css';
import * as ReactRouterDOM from "react-router-dom";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import SvgIcon from '@material-ui/core/SvgIcon';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const Link = ReactRouterDOM.Link;
const Redirect = ReactRouterDOM.Redirect;

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#3d5afe',
    },
  },
  overrides: {
    MuiTypography: {
      h2: {
        fontWeight: 500,
      },
    },
  },
});

let id = 0;
function createData(taskName, level, time, date) {
  id += 1;
  return { id, taskName, level, time, date };
}

const tasks = [
  createData('Сделать проект ToDo', "высокий", "11:00", "18.03.2019"),
  createData('Научиться переопределять стили', "средний", "12:42", "18.03.2019"),
  createData('Настроить стили', "низкий", "13:27", "18.03.2019"),
  createData('Добавить чекбоксы', "средний", "15:05", "18.03.2019"),
];
const doneTasks = [
  createData('Добавить таблицу', "высокий", "11:15", "18.03.2019"),
];

class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {...props} = this.props;
    return (
      <header className="title">
        <SvgIcon color="secondary" className="titleIcon" {...props}>
          <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z" />
        </SvgIcon>
        <Typography inline="true" color="secondary" component="h1" variant="h2" gutterBottom>ToDoList</Typography>
      </header>
    );
  }
}

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
        <div className="Container App">
          <Title />
          <Paper>
            <Grid container justify="center" spacing={Number(16)}>
              <Grid item>
                <Button onClick={this.onClickHandle} color="secondary" variant="outlined">
                    Добавить
                </Button>
              </Grid>
            </Grid>
            {/* <Typography component="tableTitle" variant="h6" gutterBottom>Таски</Typography> */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Список задач</TableCell>
                  <TableCell align="right">Уровень важности</TableCell>
                  <TableCell align="right">Время</TableCell>
                  <TableCell align="right">Дата</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.taskName}
                    </TableCell>
                    <TableCell align="right">{row.level}</TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableHead>
                <TableRow>
                  <TableCell>Сделанные задачи</TableCell>
                  <TableCell align="right">Уровень важности</TableCell>
                  <TableCell align="right">Время</TableCell>
                  <TableCell align="right">Дата</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {doneTasks.map(row => (
                  <TableRow className="doneTasks" key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.taskName}
                    </TableCell>
                    <TableCell align="right">{row.level}</TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
