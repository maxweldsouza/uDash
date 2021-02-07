import React, { useEffect, useState } from 'react';
import CustomSlider from './CustomSlider';
import { applyBrightness, getBrightness } from './brightness';
import { Sun, Volume2, VolumeX, Bluetooth, Thermometer, HardDrive } from 'react-feather';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import BorderLinearProgress from './BorderLinearProgress';
import {useInterval} from 'react-use';
import { Progress, ProgressInner } from './styledComponents';
const si = require('systeminformation');

const Value = styled.div`
  text-align: right;
`;

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
        <ProgressInner percent={temp} />
      </Progress>
      <Value>{temp} <sup>o</sup>C</Value>
    </>
  );
}

export default CPUTemp;
