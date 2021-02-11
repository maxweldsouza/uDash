import React, { useEffect, useState } from 'react';
import { HardDrive } from 'react-feather';
import { getDisks } from './disk';
import { DiskProgressInner, Grid, Progress, Value } from './styledComponents';
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
      <Grid rows={disks.length}>
        {disks.map((disk: { name: string; percent: number; }) => {
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
      </Grid>
  );
}

export default DiskUsage;
