import React, { useEffect, useState } from 'react';
import CustomSlider from './CustomSlider';
import { applyBrightness, getBrightness } from './brightness';
import { Sun, Volume2, VolumeX, Bluetooth, Thermometer, HardDrive } from 'react-feather';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import BorderLinearProgress from './BorderLinearProgress';
import {useInterval} from 'react-use';
const si = require('systeminformation');

type MonitorBrightnessProps = {
};
const Value = styled.div`
  text-align: right;
`;

function DiskUsage(props: MonitorBrightnessProps) {
  return (
    <>
      <HardDrive/>
      Disk Usage
      <BorderLinearProgress variant={'determinate'} value={30} />
      <div/>
    </>
  );
}

export default DiskUsage;
