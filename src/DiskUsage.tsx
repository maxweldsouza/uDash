import React, { useEffect, useState } from 'react';
import { HardDrive } from 'react-feather';
import { getDisks } from './disk';
import { DiskProgressInner, Progress, Value } from './styledComponents';
import { useInterval } from 'react-use';

function DiskUsage() {
  const [disks, setDisks] = useState<any>([]);

  useEffect(() => {
    getDisks().then((d) => setDisks(d));
  }, []);

  useInterval(() => {
    getDisks().then((d) => setDisks(d));
  }, 5000);
  return (
    <>
      {disks.map((disk) => {
        return (
          <React.Fragment key={disk.name}>
            <HardDrive />
            <div>{disk.name}</div>
            <Progress>
              <DiskProgressInner percent={disk.percent} />
            </Progress>
            <Value>{Math.floor(disk.percent)} %</Value>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default DiskUsage;
