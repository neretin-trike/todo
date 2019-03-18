import React, { Component } from 'react';
import './App.css';
import * as ReactRouterDOM from "react-router-dom";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
        marginTop: "25px",
        fontWeight: 500,
      },
    },
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Сделать проект ToDo', 159, 6.0, 24, 4.0),
  createData('Добавить таблицу', 237, 9.0, 37, 4.3),
  createData('Научиться переопределять стили', 305, 3.7, 67, 4.3),
  createData('Настроить стили', 262, 16.0, 24, 6.0),
  createData('Добавить чекбоксы', 356, 16.0, 49, 3.9),
];

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
          <header>
            <Typography color="secondary" component="h1" variant="h2" gutterBottom>ToDo List</Typography>
          </header>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat (g)</TableCell>
                  <TableCell align="right">Carbs (g)</TableCell>
                  <TableCell align="right">Protein (g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <Button onClick={this.onClickHandle} color="secondary" variant="outlined">
            Добавить
          </Button>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
