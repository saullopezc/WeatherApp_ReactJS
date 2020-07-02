import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import './App.css';
import ForecastExtendedConteiner from './containers/ForecastExtendedConteiner';
import LocationListContainer from './containers/LocationListContainer';

const cities = [
  'Guatemala,gt',
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de Mexico,mx',
  'Madrid,es',
  'Lima,pe'
]

class App extends Component {

  render() {
    return (
      <Grid className="App">
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography /*variant='title' color="inherit"*/ >
                Weather App
                </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
<LocationListContainer cities={cities}>
  </LocationListContainer>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="detail">
              <ForecastExtendedConteiner>
                
              </ForecastExtendedConteiner>
              </div>
            </Paper>
          </Col>

        </Row>
      </Grid>
    );
  }
}

export default App;
