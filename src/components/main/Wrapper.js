import React, { Component, Children } from 'react';
import * as ReactRouterDOM from "react-router-dom";
import './Wrapper.css'

import { connect } from "react-redux";

import TaskTable from '../task/list/TaskTable';
import AddTaskCard from '../task/creator/AddTaskCard';
import ViewTaskCard from '../task/viewer/ViewTaskCard';

class Wrapper extends Component {
    render() {
        return (
          <section className={this.props.currentPage}>
            <AddTaskCard />
            <TaskTable />
            <ViewTaskCard />
          </section>
        )
    }
}

function mapStateToProps(store) {
    return {
        currentPage: store.currentPage,
    };
  }

export default connect(mapStateToProps)(Wrapper);