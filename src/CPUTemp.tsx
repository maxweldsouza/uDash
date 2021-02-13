import React, { useState } from 'react';
import { Thermometer } from 'react-feather';
import {
  Progress,
  DiskProgressInner,
  Value,
  Grid,
  Scroll,
} from './styledComponents';
import { useInterval } from 'react-use';
import usePageVisibility from 'use-page-visibility';
const si = require('systeminformation');

function CPUTemp() {
  const [temp, setTemp] = useState(0);
  const [visible, setVisible] = useState(true);

  usePageVisibility((v: boolean) => {
    setVisible(v);
  });

  useInterval(() => {
    if (!visible) return;

    si.cpuTemperature().then((data?: { main: number }) => {
      if (data?.main) {
        setTemp(data?.main);
      }
    });
  }, 1000);

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
