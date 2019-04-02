import React, { Component, Children } from 'react';
import * as ReactRouterDOM from "react-router-dom";
import './ViewTaskCard.css';

import { connect } from "react-redux";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

function getPriorityText(level) {
  let priorityArr = ["Низкий", "Средний", "Высокий"];
  return priorityArr[level];
}

class CustomTypographyCard extends Component {
  render() {
    let children = this.props.children;
    return (
      <Typography 
        classes={{
          root: "root",
          subtitle1: "custom-subtitle1"
        }}
        variant="subtitle1" 
        gutterBottom 
      >
        <span className="custom-counter" />{children}
      </Typography>
    )
  }
}

class ViewTaskCard extends Component {
    render() {
      let item = this.props.viewFormValues;
      return (
        <Card className="custom-card">
          <CardHeader 
              title="Просмотр задачи">
          </CardHeader>  
          <CardContent>
            <Grid container spacing={16} alignItems="center">
              <Grid item xs={4}>
                <CustomTypographyCard>Задача</CustomTypographyCard>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  readOnly
                  value={item.description}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
              <CustomTypographyCard>Подробное описание</CustomTypographyCard>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  readOnly
                  multiline
                  rows={4}
                  value={item.additional_data.info}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
              <CustomTypographyCard>Время выполнения</CustomTypographyCard>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  readOnly
                  value={item.duration_days + " д."}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  readOnly
                  value={item.duration_hours + " ч."}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
              <CustomTypographyCard>Приоритет</CustomTypographyCard>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  readOnly
                  value={getPriorityText(item.additional_data.priority)}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
              <CustomTypographyCard>Файл</CustomTypographyCard>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  readOnly
                  value="какой-то-файл.jpg"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SvgIcon color="secondary">
                          <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
          </Grid>
          </CardContent>
          <CardActions style={{ float: 'right' }}>
            <Button variant="outlined" color="primary">
              Закрыть
            </Button>
            <Button variant="outlined" color="primary">
              Изменить
            </Button>
          </CardActions>
        </Card>
      )
    }
}

function mapStateToProps(store) {
  return {
    viewFormValues: store.viewFormValues,
  };
}

export default connect(mapStateToProps)(ViewTaskCard);