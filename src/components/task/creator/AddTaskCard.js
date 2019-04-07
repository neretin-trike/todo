import React, { Component, Children } from 'react';
import * as ReactRouterDOM from "react-router-dom";
import './AddTaskCard.css';

import { connect } from "react-redux";
import { saveTask, editTask} from "../../../api/apiManager";
import { changeAddFormValue, addNewTask, editSelectTask, setPageOpen, mapTaskToAddForm } from "../../../actions/actions";
import store from '../../../store';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import FilledInput from '@material-ui/core/FilledInput';

class AddTaskCard extends Component {
    constructor(props) {
      super(props);

      this.fileInput = React.createRef();
    }
    render() {
      let {addFormValues, changeValueHandle} = this.props;
      return (
        <Card className="custom-card">
          <CardHeader 
            classes={{
                root: "custom-cardheader",
                content: "custom-cardheader-title",
                title: "custom-cardheader-title"
            }}
            title={this.props.addTaskType + " задачи"}>
          </CardHeader>
          <CardContent>
            <form 
              onSubmit={ (e) => this.props.submitAddFormHandle(e, this.fileInput)}
              id="addForm" 
              autoComplete="off"
            >
              <TextField
                value={addFormValues.description}
                name="description"
                onChange={changeValueHandle}
                
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
                value={addFormValues.additional_data.info}
                name="info"
                onChange={changeValueHandle}

                required
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
                    value={addFormValues.duration_days}
                    name="duration_days"
                    onChange={changeValueHandle}

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
                    value={addFormValues.duration_hours}
                    name="duration_hours"
                    onChange={changeValueHandle}

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
  
                    value={addFormValues.additional_data.priority}
                    name="priority"
                    onChange={changeValueHandle}
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
                    type="file"
                    // value="Имя файла"
                    inputRef = {this.fileInput}
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
            <Button 
              variant="outlined" 
              color="primary"
              onClick={this.props.closeAddForm}>
              Отменить
            </Button>
            <Button 
              type="submit"
              form="addForm"

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
    return store;
  }

  const mergeProps = (stateProps, dispatcProps) => {
    const {addFormValues, addTaskType} = stateProps;
    const {dispatch} = dispatcProps;

    return {
      addFormValues,
      addTaskType,
      submitAddFormHandle: function(event, fileInput) {

        event.preventDefault();

        let token = localStorage.getItem("token");
        let formData = new FormData();
        
        let object = {...addFormValues};
        object.attachmentFile = fileInput.current.files[0];
        object.info = object.additional_data.info;
        object.priority = object.additional_data.priority;
        delete object.additional_data;

        for(let key in object) {
          formData.append(key, object[key])
        }

        if (addTaskType === "Добавление новой") {
          saveTask(formData, token).
            then( json => {
              dispatch(addNewTask(addFormValues, json.id))
          }, error => alert(error));
        }
        if (addTaskType === "Изменение") {
          let {id} = addFormValues; 

          editTask(id, formData, token).
            then( json => {
              dispatch(editSelectTask(json))
          }, error => alert(error));
        }

        dispatch(setPageOpen("open-tasklist") );
        dispatch(mapTaskToAddForm(null,"Добавление новой") );
      },
      changeValueHandle: function(event) {
        const target = event.target;
        dispatch(changeAddFormValue(target.name, target.value) );
      },
      closeAddForm: function(event) {
        dispatch(setPageOpen("open-tasklist") );
        dispatch(mapTaskToAddForm(null,"Добавление новой") );
      }
    }
  }

  export default connect(mapStateToProps, null, mergeProps)(AddTaskCard);