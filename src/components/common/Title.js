import React, { Component, Children } from 'react';
import * as ReactRouterDOM from "react-router-dom";
import './Title.css';

import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';

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

  export default Title;