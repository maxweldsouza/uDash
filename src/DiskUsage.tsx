import React, { useEffect, useState } from 'react';
import { HardDrive } from 'react-feather';
import { getDisks } from './disk';
import { DiskProgressInner, Grid, Progress, Scroll, Value } from './styledComponents';
import { useInterval } from 'react-use';
import usePageVisibility from 'use-page-visibility';

function DiskUsage() {
  const [disks, setDisks] = useState<any>([]);
  const [visible, setVisible] = useState(true);

  usePageVisibility((v: boolean) => {
    setVisible(v);
  });

  useEffect(() => {
    getDisks().then((d) => setDisks(d));
  }, []);

  useInterval(() => {
    if (!visible) return;
    getDisks().then((d) => setDisks(d));
  }, 5000);
  return (
    <Scroll count={3}>
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
    </Scroll>
  );
}

export default DiskUsage;
