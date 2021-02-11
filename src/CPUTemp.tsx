import React, { useState } from 'react';
import { Thermometer } from 'react-feather';
import { useInterval } from 'react-use';
import { Progress, DiskProgressInner, Value, Grid } from './styledComponents';
const si = require('systeminformation');

function CPUTemp() {
  const [temp, setTemp] = useState(0);

  useInterval(() => {
    si.cpuTemperature().then((data: { main: number; }) => {
      return setTemp(data.main);
    });
  }, 1000);
  return (
    <>
      <Grid rows={2}>
        Temperature
        <div/>
        <div/>
        <div/>
        <Thermometer />
        CPU Temperature
        <Progress>
          <DiskProgressInner percent={temp} />
        </Progress>
        <Value>
          {Math.floor(temp)} <sup>o</sup>C
        </Value>
      </Grid>
    </>
  );
}

export default CPUTemp;
