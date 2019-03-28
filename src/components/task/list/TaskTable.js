import React, { Component, Children } from 'react';
import * as ReactRouterDOM from "react-router-dom";
import './TaskTable.css';

import { connect } from "react-redux";
import { markTaskAsDone } from "../../../redux/actions";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

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
    let {style, options, tasks} = this.props;
    return (
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
                root: style
              }}
              hover={true} 
              key={row.id} >
              <TableCell style={{width:"1px"}} padding="checkbox">
                <Checkbox 
                  // disabled={options.disabled} 
                  checked={row.isDone} 
                  onChange={this.props.changeHandle} />
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
    )

  }
}


class TaskTable extends Component {
  render() {
    return (
      <Paper>
        <TaskList 
          changeHandle = {this.props.changeHandle}
          tasks={this.props.tasksPlanned} 
          options = {{
           checked:false,
           disabled:false,
          }}
          style = {"table-row"}
        />
        <TaskList 
          tasks={this.props.tasksDone} 
          options = {{
           checked:true,
           disabled:true,
          }}
          style = {"table-row done-task"}
        />
      </Paper>      
    )
  }
}

function mapStateToProps(store) {
  console.log(store);
  return {
    tasksPlanned: store.tasksPlanned,
    tasksDone: store.tasksDone,
  };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    changeHandle: function(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      console.log(target);
      dispatch(markTaskAsDone({}, {}) );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskTable);