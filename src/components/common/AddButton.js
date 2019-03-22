import React, { Component, Children } from 'react';
import * as ReactRouterDOM from "react-router-dom";
import './AddButton.css';

import Fab from '@material-ui/core/Fab';

class AddButton extends Component {
    render() {
        return (
          <Fab 
            classes={{
              root: "add-button root",
              label: "add-button-label"
            }}
            aria-label="Add"
          >+</Fab>
        )
    }
}

export default AddButton;