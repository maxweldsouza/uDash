import React, { useState } from 'react';
import { Thermometer } from 'react-feather';
import {useInterval} from 'react-use';
import { Progress, DiskProgressInner, Value } from './styledComponents';
const si = require('systeminformation');

function CPUTemp() {
  const [temp, setTemp] = useState(0);

  useInterval(
    () => {
      si.cpuTemperature().then(data => {
        return setTemp(data.main);
      });
    },
    1000
  );
  return (
    <>
      <Thermometer />
      CPU Temperature
      <Progress>
        <DiskProgressInner percent={temp} />
      </Progress>
      <Value>{Math.floor(temp)} <sup>o</sup>C</Value>
    </>
  );
}

export default CPUTemp;
