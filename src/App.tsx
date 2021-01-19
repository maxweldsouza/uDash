import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MonitorBrightness from './MonitorBrightness';
import { Sun } from 'react-feather';

// TODO
// Wifi
// Bluetooth
// System usage
// Battery
// Power


const Hello = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <h1>
          Ubuntu Dash
        </h1>
        </Grid>
        <Grid item xs={12}>
          <Sun />
        <Typography id="continuous-slider" gutterBottom>
          Brightness
        </Typography>
        </Grid>
        <Grid item xs={12}>
          <MonitorBrightness monitor={'HDMI1'}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
