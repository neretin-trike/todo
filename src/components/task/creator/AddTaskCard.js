import React, { Component, Children } from 'react';
import * as ReactRouterDOM from "react-router-dom";
import './AddTaskCard.css';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

class AddTaskCard extends Component {
    render() {
      return (
        <Card className="custom-card">
          <CardHeader 
            classes={{
                root: "custom-cardheader",
                content: "custom-cardheader-title",
                title: "custom-cardheader-title"
            }}
            className=""
            title="Добавление новой задачи">
          </CardHeader>
          <CardContent>
          <form noValidate autoComplete="off">
            <TextField
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
                  value="Низкий"
                >
                  <MenuItem value="Низкий">Низкий</MenuItem>>
                  <MenuItem value="Средний">Средний</MenuItem>>
                  <MenuItem value="Высокий">Высокий</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Файл"
                  margin="normal"
                  variant="outlined"
                  // type="file"
                  value="Имя файла"
                  fullWidth
                  className="custom-file-input"
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
            <Button variant="outlined" color="primary">
              Сохранить
            </Button>
          </CardActions>
        </Card>
      )
    }
  }

  
  export default AddTaskCard;