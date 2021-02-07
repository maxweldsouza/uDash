import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MSwitch from '@material-ui/core/Switch';
import LinearProgress from '@material-ui/core/LinearProgress';
import MonitorBrightness from './MonitorBrightness';
import { Sun, Volume2, VolumeX, Bluetooth, Thermometer, HardDrive } from 'react-feather';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import {useInterval} from 'react-use';
import CustomSlider from './CustomSlider';
import { getVolume } from './sound';
const si = require('systeminformation');
const { exec } = require('child_process');

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
  grid-template-columns: 40px 160px 1fr;
  grid-template-rows: 45px 45px 45px;
  align-items: center;
`;

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const Hello = () => {
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    getVolume().then(vol => setVolume(vol));
  }, []);



  useEffect(() => {
  }, []);

  useInterval(
    () => {
      si.cpuTemperature().then(console.log)
    },
    1000
  );
  return (
    <Wrapper>
      <h1>
        Ubuntu Dash
      </h1>
      <Container>
        <Sun />
        <Typography id="continuous-slider" gutterBottom>
          Brightness
        </Typography>
        <MonitorBrightness />
        <Volume2/>
        Volume
        <CustomSlider value={volume} min={0} max={100} onChange={(e, newValue) => {setVolume(newValue)}}/>
        <Bluetooth/>
        Bluetooth
        <MSwitch />
      </Container>
      <Divider/>
    <Container>
      <Thermometer />
      CPU Temperature
      <BorderLinearProgress variant={'determinate'} value={30} />
      <HardDrive/>
      Disk Usage
      <BorderLinearProgress variant={'determinate'} value={30} />
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
