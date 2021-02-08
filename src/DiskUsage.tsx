import React, { useEffect, useState } from 'react';
import { HardDrive } from 'react-feather';
import { getDisks } from './disk';
import { DiskProgressInner, Progress, Value } from './styledComponents';
import styled from 'styled-components';

type MonitorBrightnessProps = {
};
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
            <DiskProgressInner percent={disk.percent} />
          </Progress>
          <Value>{Math.floor(disk.percent)} %</Value>
        </React.Fragment>
      })}
    </>
  );
}

export default DiskUsage;
