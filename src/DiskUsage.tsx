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
const Progress = styled.div`
    width: 100%;
    height: 10px;
    position: relative;
    background: #eee;
    border-radius: 5px;
    overflow: hidden;
`;

const ProgressInner = styled.div`
    height: 10px;
    background: hsl(${props => 120 - (props.percent * 120 / 100)}, 100%, 66%);
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateX(${props => props.percent - 100}%)  translateY(-50%);
    transition: transform 0.2s ease;
    width: 100%;
`;

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
          <Progress>
            <ProgressInner percent={disk.percent} />
          </Progress>
          <Value>{disk.percent} %</Value>
        </React.Fragment>
      })}
    </>
  );
}

export default DiskUsage;
