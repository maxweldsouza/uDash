import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MonitorBrightness from './MonitorBrightness';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import CPUTemp from './CPUTemp';
import DiskUsage from './DiskUsage';
import Volume from './Volume';
import Wifi from './Wifi';
import { Grid } from './styledComponents';

// TODO
// Wifi
// Bluetooth
// System usage
// Battery
// Power

const Wrapper = styled.div`
  margin: 40px;
  -webkit-app-region: no-drag;
`;
const Hello = () => {
  return (
    <Wrapper>
      <h1>Ubuntu Dashboard</h1>
      <Grid rows={4}>
        Controls
        <div/>
        <div/>
        <div/>
        <Wifi/>
        <Volume />
        <MonitorBrightness />
        {/*<Bluetooth/>*/}
        {/*Bluetooth*/}
        {/*<MSwitch />*/}
        {/*<div/>*/}
      </Grid>
      <Divider/>
      <Grid rows={2}>
        Temperature
        <div/>
        <div/>
        <div/>
        <CPUTemp />
      </Grid>
      <Divider/>
      <DiskUsage />
    </Wrapper>
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
