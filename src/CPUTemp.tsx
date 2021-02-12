import React, { useState } from 'react';
import { Thermometer } from 'react-feather';
import { Progress, DiskProgressInner, Value, Grid, Scroll } from './styledComponents';
import { useInterval } from './hooks';
const si = require('systeminformation');

function CPUTemp() {
  const [temp, setTemp] = useState(0);
  const visibilityState = document.visibilityState;

  useInterval(() => {
    console.log('visibilityState: ', visibilityState);
    if (visibilityState !== 'visible') return;
    si.cpuTemperature().then((data: { main: number; }) => {
      console.log('temp: ');
      return setTemp(data.main);
    });
  }, [visibilityState], 1000);
  return (
    <Scroll count={1}>
      <Grid rows={1}>
        <Thermometer />
        CPU Temperature
        <Progress>
          <DiskProgressInner percent={temp} />
        </Progress>
        <Value>
          {Math.floor(temp)} <sup>o</sup>C
        </Value>
      </Grid>
    </Scroll>
  );
}

export default CPUTemp;
