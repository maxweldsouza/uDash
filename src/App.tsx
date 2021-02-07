import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import MSwitch from '@material-ui/core/Switch';
import LinearProgress from '@material-ui/core/LinearProgress';
import MonitorBrightness from './MonitorBrightness';
import { Sun, Volume2, VolumeX, Bluetooth, Thermometer, HardDrive } from 'react-feather';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import CustomSlider from './CustomSlider';
import { getVolume } from './sound';
import BorderLinearProgress from './BorderLinearProgress';
import CPUTemp from './CPUTemp';
import DiskUsage from './DiskUsage';

// TODO
// Wifi
// Bluetooth
// System usage
// Battery
// Power

const Wrapper = styled.div`
  padding: 20px;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 40px 160px 1fr 60px;
  grid-template-rows: repeat(auto-fill, 45px);
  align-items: center;
`;

const Hello = () => {
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    getVolume().then(vol => setVolume(vol));
  }, []);



  useEffect(() => {
  }, []);

  return (
    <Wrapper>
      <h1>
        Ubuntu Dash
      </h1>
      <Container>
        <MonitorBrightness />
        <Volume2/>
        Volume
        <CustomSlider value={volume} min={0} max={100} onChange={(e, newValue) => {setVolume(newValue)}}/>
        <div/>
        <Bluetooth/>
        Bluetooth
        <MSwitch />
        <div/>
      </Container>
      <Divider/>
    <Container>
      <CPUTemp/>
      <DiskUsage/>
    </Container>
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
