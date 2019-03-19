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
import Fab from '@material-ui/core/Fab';
import Checkbox from '@material-ui/core/Checkbox';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';

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
  overrides: {
    MuiTypography: {
      h2: {
        fontWeight: 500,
      },
    },
  },
});

let id = 0;
function createData(taskName, level, duration) {
  id += 1;
  return { id, taskName, level, duration};
}

const tasks = [
  createData('Сделать проект ToDo', "высокий", "1 д."),
  createData('Научиться переопределять стили', "средний", "12 ч.", "18.03.2019"),
  createData('Настроить стили', "низкий", "6 ч."),
];
const doneTasks = [
  createData('Добавить чекбоксы', "средний", "1 ч."),
  createData('Добавить таблицу', "высокий", "2 ч."),
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
        <Typography className="typography-header" component="h1" variant="h2" gutterBottom>ToDoList</Typography>
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
            <Grid container justify="center" className="grid-container" spacing={Number(16)}>
              <Grid item className="grid-item">
                <Fab className="add-task-button" aria-label="Add">
                +
                </Fab>
                {/* <Button onClick={this.onClickHandle} color="secondary" variant="outlined">
                    +
                </Button> */}
              </Grid>
            </Grid>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{width:"1px"}} padding="checkbox">
                    {/* <Checkbox checked={false} /> */}
                  </TableCell>
                  <TableCell className="table-head-tasks">Список задач</TableCell>
                  <TableCell className="table-head-tasks" align="right">Приоритет</TableCell>
                  <TableCell className="table-head-tasks" align="right">Длительность</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map(row => (
                  <TableRow 
                    hover={true} 
                    key={row.id}
                  >
                   <TableCell style={{width:"1px"}} padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.taskName}
                    </TableCell>
                    <TableCell align="right">{row.level}</TableCell>
                    <TableCell align="right">{row.duration}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableHead>
                <TableRow>
                  <TableCell style={{width:"1px"}} padding="checkbox">
                    {/* <Checkbox checked={false} /> */}
                  </TableCell>
                  <TableCell>Сделанные задачи</TableCell>
                  <TableCell align="right">Приоритет</TableCell>
                  <TableCell align="right">Длительность</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {doneTasks.map(row => (
                  <TableRow 
                    className="doneTasks" 
                    key={row.id}
                  >
                   <TableCell style={{width:"1px"}} padding="checkbox">
                      <Checkbox disabled checked/>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.taskName}
                    </TableCell>
                    <TableCell align="right">{row.level}</TableCell>
                    <TableCell align="right">{row.duration}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <Card className="custom-card">
            <CardHeader 
               className="custom-cardheader"
               title="Добавление новой задачи">
            </CardHeader>
            <CardContent>
            <form noValidate autoComplete="off">
              <TextField
                required
                label="Задача"
                margin="normal"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Подробное описание"
                margin="normal"
                variant="outlined"
                fullWidth
                multiline
                rows="4"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Grid container spacing={16}>
                <Grid item xs={3}>
                  <TextField
                    label="Дни"
                    helperText="Длительность в днях"
                    margin="normal"
                    type="number"
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Часы"
                    helperText="Длительность в часах"
                    margin="normal"
                    type="number"
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Приоритет"
                    select
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    value="Низкий"
                  >
                    <MenuItem value="Низкий">Низкий</MenuItem>>
                    <MenuItem value="Средний">Средний</MenuItem>>
                    <MenuItem value="Высокий">Высокий</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Файл"
                    margin="normal"
                    variant="outlined"
                    // type="file"
                    value="Имя файла"
                    fullWidth
                    className="custom-file-input"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
            </form>
            </CardContent>
            <CardActions style={{ float: 'right' }}>
              <Button variant="outlined" color="primary">
                Отмена
              </Button>
              <Button variant="outlined" color="primary">
                Сохранить
              </Button>
            </CardActions>
          </Card>
          <Card className="custom-card">
            <CardHeader 
               title="Просмотр задачи">
            </CardHeader>  
            <CardContent>
              <Grid container spacing={16} alignItems="center">
                <Grid item xs={4}>
                <Typography variant="subtitle1" gutterBottom>
                  1. Задача
                </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    readonly
                    value="Научиться переопределять стили"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                <Typography variant="subtitle1" gutterBottom>
                  2. Подробное описание
                </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    readonly
                    multiline
                    rows={4}
                    value="Здесь будет какой-нибудь длинный текст который не влазиет в одну строку, поэтому используется компонент со свойством multiline"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1" gutterBottom>
                    3. Время выполнения
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    readonly
                    value="0 д."
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    readonly
                    value="12 ч."
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1" gutterBottom>
                    4. Приоритет
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    readonly
                    value="Низкий"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1" gutterBottom>
                    5. Файл
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    readonly
                    value="какой-то-файл.jpg"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          Kg
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
            </Grid>
            </CardContent>
            <CardActions style={{ float: 'right' }}>
              <Button variant="outlined" color="primary">
                Закрыть
              </Button>
              <Button variant="outlined" color="primary">
                Изменить
              </Button>
            </CardActions>
          </Card>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
