import React, { useEffect, useState } from 'react';
import CustomSlider from './CustomSlider';
import { applyBrightness, getBrightness } from './brightness';
import { Sun, Volume2, VolumeX, Bluetooth, Thermometer, HardDrive } from 'react-feather';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import BorderLinearProgress from './BorderLinearProgress';
import { getDisks } from './disk';

type MonitorBrightnessProps = {
};
const Value = styled.div`
  text-align: right;
`;

function DiskUsage(props: MonitorBrightnessProps) {
  const [disks, setDisks] = useState<any>([]);
  useEffect(() => {
    getDisks().then(d => setDisks(d));
  }, []);
  return (
    <>
      {disks.map(disk => {
        return <React.Fragment key={disk.name}>
          <HardDrive/>
          <div>{disk.name}</div>
          <BorderLinearProgress variant={'determinate'} value={disk.percent} />
          <Value>{disk.percent} %</Value>
        </React.Fragment>
      })}
    </>
  );
}

export default DiskUsage;
