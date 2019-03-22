import React, { Component, Children } from 'react';
import * as ReactRouterDOM from "react-router-dom";
import './AddButton.css';

import Fab from '@material-ui/core/Fab';

class AddButton extends Component {
    render() {
        return (
          <Fab className="add-task-button" aria-label="Add">+</Fab>
        )
    }
}

export default AddButton;