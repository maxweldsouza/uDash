import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MonitorBrightness from './MonitorBrightness';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import CPUTemp from './CPUTemp';
import DiskUsage from './DiskUsage';
import Volume from './Volume';
import Wifi from './Wifi';
import { Grid, SectionTitle } from './styledComponents';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
  margin: 40px;
  -webkit-app-region: no-drag;
`;
const Hello = () => {
  return (
    <ThemeProvider theme={theme}>
    <Wrapper>
      <h1>uDash</h1>
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
