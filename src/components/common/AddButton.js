import React, { Component, Children } from 'react';
import * as ReactRouterDOM from "react-router-dom";
import './AddButton.css';

import Fab from '@material-ui/core/Fab';

import { connect } from "react-redux";
import { setPageOpen } from "../../actions/actions";

class AddButton extends Component {
    render() {
      console.log(this.props);
        return (
          <Fab 
            classes={{
              root: "add-button root",
              label: "add-button-label"
            }}
            onClick={this.props.openAddForm}
            aria-label="Add"
          >+</Fab>
        )
    }
}

const mapDispatchToProps = (dispatch, ownnProps) => {
  return {
    openAddForm: function(event) {
      dispatch(setPageOpen("open-addform"));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddButton);