import React, { Component, Children } from 'react';
import * as ReactRouterDOM from "react-router-dom";
import './AddTaskCard.css';

import { connect } from "react-redux";
import { loginUser, saveTask} from "../../../api/apiManager";
import { changeAddFormValue } from "../../../actions/actions";
import store from '../../../store';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class AddTaskCard extends Component {
    render() {
      console.log(this.props)
      return (
        <Card className="custom-card">
          <CardHeader 
            classes={{
                root: "custom-cardheader",
                content: "custom-cardheader-title",
                title: "custom-cardheader-title"
            }}
            title="Добавление новой задачи">
          </CardHeader>
          <CardContent>
            <form noValidate autoComplete="off">
              <TextField
                value={this.props.addFormValues.description}
                name="description"
                onChange={this.props.changeValueHandle}

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
                value={this.props.addFormValues.info}
                name="info"
                onChange={this.props.changeValueHandle}

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
                    value={this.props.addFormValues.duration_days}
                    name="duration_days"
                    onChange={this.props.changeValueHandle}

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
                    value={this.props.addFormValues.duration_hours}
                    name="duration_hours"
                    onChange={this.props.changeValueHandle}

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
  
                    value={this.props.addFormValues.priority}
                    name="priority"
                    onChange={this.props.changeValueHandle}
                  >
                    <MenuItem value="0">Низкий</MenuItem>>
                    <MenuItem value="1">Средний</MenuItem>>
                    <MenuItem value="2">Высокий</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Файл"
                    margin="normal"
                    variant="outlined"
                    value="Имя файла"
                    fullWidth
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
              Отменить
            </Button>
            <Button 
              onClick={this.props.addClickHandle}
              variant="outlined" 
              color="primary">
              Сохранить
            </Button>
          </CardActions>
        </Card>
      )
    }
  }

  function mapStateToProps(store) {
    return {
      addFormValues: store.addFormValues
    };
  }

  const mapDispatchToProps = function(dispatch, ownProps) {
    return {
      addClickHandle: function(event) {
        let data = {'username':"trike",'password':"123456"};
        loginUser(data).
          then( json => {
            let token = json.token;
            
            let formData = new FormData();

            let object = store.getState().addFormValues;

            for(let key in object) {
              formData.append(key, object[key])
            }
            saveTask(formData, token).catch(error => alert(error));
          }, 
          err => alert(err) );

        alert();
      },
      changeValueHandle: function(event) {
        const target = event.target;
        dispatch(changeAddFormValue(target.name, target.value) );
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AddTaskCard);