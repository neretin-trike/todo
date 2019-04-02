import React, { Component, Children } from 'react';
import './TaskTable.css';

import { connect } from "react-redux";
import { markTaskAsDone, markTaskAsPlanned, getTaskViewerInfo } from "../../../actions/actions";
import { getTask } from "../../../api/apiManager";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

function getPriorityText(level) {
  let priorityArr = ["Низкий", "Средний", "Высокий"];
  return priorityArr[level];
}

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

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    let {style, tasks} = this.props;
    return (
      <Table>
        {
          !!tasks.length && 
          <TableHead>
          <TableRow>
            <TableCell style={{width:"1px"}} padding="checkbox">
            </TableCell>
            <CustomTableHeadCell>Список задач</CustomTableHeadCell>
            <CustomTableHeadCell align="right">Приоритет</CustomTableHeadCell>
            <CustomTableHeadCell align="right">Длительность</CustomTableHeadCell>
          </TableRow>
        </TableHead>
        }

        <TableBody>
          {tasks.map(row => (
            <TableRow
              classes = {{
                root: style
              }}
              hover={true} 
              key={row.id} 
              onClick={(e) => this.props.onclickHande(e,row.id) } >
              <TableCell style={{width:"1px"}} padding="checkbox">
                <Checkbox 
                  checked={row.isDone} 
                  onChange={ (e) => this.props.changeHandle(e, row.id) } />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell align="right">{getPriorityText(row.additional_data.priority)}</TableCell>
              <TableCell align="right">{row.duration_days} д. {row.duration_hours} ч.</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )

  }
}


class TaskTable extends Component {

  render() {
    return (
      <Paper>
        <TaskList 
          onclickHande = {this.props.getTaskInfo}
          changeHandle = {this.props.changeHandlePlannedTask}
          tasks={this.props.tasksPlanned} 
          style = {"table-row"}
        />
        <TaskList 
          onclickHande = {this.props.getTaskInfo}
          changeHandle = {this.props.changeHandleDoneTask}
          tasks={this.props.tasksDone} 
          style = {"table-row done-task"}
        />
      </Paper>      
    )
  }
}

function mapStateToProps(store) {
  return {
    tasksPlanned: store.tasksPlanned,
    tasksDone: store.tasksDone,
  };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    getTaskInfo: function (event, id) {
      let token = localStorage.getItem("token");
      getTask(id, token).
        then(json => dispatch(getTaskViewerInfo(json)));
    },
    changeHandlePlannedTask: function(event, id) {
      dispatch(markTaskAsDone(id));
    },
    changeHandleDoneTask: function(event, id) {
      dispatch(markTaskAsPlanned(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskTable);