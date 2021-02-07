import React, { useEffect, useState } from 'react';
import CustomSlider from './CustomSlider';
const { exec } = require('child_process');

type MonitorBrightnessProps = {
  monitor: string;
};

function MonitorBrightness(props: MonitorBrightnessProps) {
  const [brightness, setBrightness] = useState(1);

  useEffect(() => {
    exec(`xrandr --output ${props.monitor} --brightness ${brightness}`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  }, [brightness]);

  return (
    <CustomSlider value={brightness} min={0} max={1} step={0.01} onChange={(_e, newValue) => setBrightness(newValue)} aria-labelledby="continuous-slider" />
  );
}

export default MonitorBrightness;
