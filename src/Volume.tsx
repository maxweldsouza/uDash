import React, { useEffect, useState } from 'react';
import { Sun, Volume2, VolumeX, Bluetooth } from 'react-feather';
import { applyVolume, getVolume } from './sound';
import CustomSlider from './CustomSlider';
import { Value } from './styledComponents';

function Volume() {
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    getVolume().then((vol) => setVolume(vol));
  }, []);

  useEffect(() => {
    applyVolume(volume);
  }, [volume]);

  return (
    <>
      <Volume2 />
      Volume
      <CustomSlider
        value={volume}
        min={0}
        max={100}
        onChange={(e, newValue) => {
          setVolume(newValue);
        }}
      />
      <Value>{Math.floor(volume)} %</Value>
    </>
  );
}

export default Volume;
