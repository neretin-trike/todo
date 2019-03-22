import React, { Component, Children } from 'react';
import * as ReactRouterDOM from "react-router-dom";
import './TaskTable.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

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

class CustomTableHeadCell extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    let child = this.props.children;
    let {...props} = this.props;
    return (
      <TableCell {...props} classes={{root: "root table-head-tasks"}} >{child}</TableCell>
    )
  }
}

class TaskTable extends Component {
  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{width:"1px"}} padding="checkbox">
              </TableCell>
              <CustomTableHeadCell>Список задач</CustomTableHeadCell>
              <CustomTableHeadCell align="right">Приоритет</CustomTableHeadCell>
              <CustomTableHeadCell align="right">Длительность</CustomTableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map(row => (
              <TableRow
                classes = {{
                  root: "table-row"
                }}
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
              </TableCell>
              <CustomTableHeadCell>Список задач</CustomTableHeadCell>
              <CustomTableHeadCell align="right">Приоритет</CustomTableHeadCell>
              <CustomTableHeadCell align="right">Длительность</CustomTableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doneTasks.map(row => (
              <TableRow 
                classes = {{
                  root: "table-row done-task"
                }}
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
    )
  }
}

export default TaskTable;