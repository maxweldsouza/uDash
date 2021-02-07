import React, { useEffect, useState } from 'react';
import CustomSlider from './CustomSlider';
import { applyBrightness, getBrightness } from './brightness';

type MonitorBrightnessProps = {
};

function MonitorBrightness(props: MonitorBrightnessProps) {
  const [brightness, setBrightness] = useState(1);
  const [monitors, setMonitors] = useState<string[]>([]);
  useEffect(() => {
    getBrightness().then(brightnessMap => {
      console.log('brightnessMap: ', brightnessMap);
      const m = Object.keys(brightnessMap);
      console.log('m: ', m);
      // @ts-ignore
      const brightness =  m.map(monitor => brightnessMap[monitor]);
      const maxB = Math.max(...brightness);
      setMonitors(m);
      setBrightness(maxB);
    });
  }, []);

  useEffect(() => {
    applyBrightness(monitors, brightness);
  }, [brightness]);

  return (
    <CustomSlider value={brightness} min={0} max={1} step={0.01} onChange={(_e, newValue) => setBrightness(newValue)} aria-labelledby="continuous-slider" />
  );
}

export default MonitorBrightness;
