import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MonitorBrightness from './MonitorBrightness';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import CPUTemp from './CPUTemp';
import DiskUsage from './DiskUsage';
import Volume from './Volume';
import Wifi from './Wifi';

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
const Container = styled.div`
  display: grid;
  grid-template-columns: 40px 160px 1fr 80px;
  grid-template-rows: repeat(8, 50px);
  align-items: center;
`;

const Hello = () => {
  return (
    <Wrapper>
      <h1>Ubuntu Dash</h1>
      <Container>
        <Wifi/>
        <Volume />
        <MonitorBrightness />
        <CPUTemp />
        <DiskUsage />
        {/*<Bluetooth/>*/}
        {/*Bluetooth*/}
        {/*<MSwitch />*/}
        {/*<div/>*/}
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
