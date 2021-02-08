import React, { useEffect, useState } from 'react';
import CustomSlider from './CustomSlider';
import { applyBrightness, getBrightness } from './brightness';
import { Sun, Volume2, VolumeX, Bluetooth, Thermometer, HardDrive } from 'react-feather';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { Value } from './styledComponents';

type MonitorBrightnessProps = {
};

function MonitorBrightness(props: MonitorBrightnessProps) {
  const [brightness, setBrightness] = useState(1);
  const [monitors, setMonitors] = useState<string[]>([]);
  useEffect(() => {
    getBrightness().then(brightnessMap => {
      const m = Object.keys(brightnessMap);
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
    <>
    <Sun />
      Brightness
    <CustomSlider value={brightness} min={0} max={1} step={0.01} onChange={(_e, newValue) => setBrightness(newValue)} aria-labelledby="continuous-slider" />
      <Value>{Math.floor(brightness * 100)} %</Value>
    </>
  );
}

export default MonitorBrightness;
