import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MonitorBrightness from './MonitorBrightness';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import CPUTemp from './CPUTemp';
import DiskUsage from './DiskUsage';
import Volume from './Volume';
import Wifi from './Wifi';
import { Grid, RoundButton, SectionTitle } from './styledComponents';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { X } from 'react-feather';
import { Minus } from 'react-feather';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#bea9fc'
    }
  }
});

// TODO
// Wifi
// Bluetooth
// System usage
// Battery
// Power

const Wrapper = styled.div`
  margin: 30px;
  -webkit-app-region: no-drag;
`;
const Header = styled.div`
  background: #3e3e3e;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 32px 32px;
  align-items: center;
  grid-gap: 8px;
  -webkit-app-region: drag;
`;

const Hello = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <h1>uDash</h1>
        <RoundButton color="#fff" background="#555"><Minus size={16}/></RoundButton>
        <RoundButton color="#fff" background="#555"><X size={16}/></RoundButton>
      </Header>
    <Wrapper>
      <SectionTitle>Controls</SectionTitle>
      <Grid rows={3}>
        <Wifi/>
        <Volume />
        <MonitorBrightness />
        {/*<Bluetooth/>*/}
        {/*Bluetooth*/}
        {/*<MSwitch />*/}
        {/*<div/>*/}
      </Grid>
      <Divider/>
      <SectionTitle>Temperature</SectionTitle>
      <CPUTemp />
      <Divider/>
      <SectionTitle>Disk Usage</SectionTitle>
      <DiskUsage />
    </Wrapper>
    </ThemeProvider>
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
