import React, { useEffect, useRef, useState } from 'react';
import { Wifi } from 'react-feather';
import { Progress, DiskProgressInner, Value } from './styledComponents';
// import Select from 'react-select';
import { applyWifi, getWifi } from './wifi';
import { useInterval } from 'react-use';
import useClickAway from 'react-use/lib/useClickAway';
import chroma from 'chroma-js';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

function WifiSelect() {
  const [wifiNetworks, setWifiNetworks] = useState([]);
  const [value, setValue] = useState<{ value: string; label: string }>('');

  useEffect(() => {
    getWifi().then((w) => {
      setWifiNetworks(w);
      const selected = w.filter((wifi: { [x: string]: string; }) => wifi?.['active'] === '*')?.[0];
      setValue(selected);
    });
  }, []);

  const options = wifiNetworks.map((wifi) => {
    return {
      value: wifi.name,
      label: wifi.name,
    };
  });

  return (
    <>
      <Wifi />
      Wifi
      <FormControl>
        <InputLabel>Select a wifi connection...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={value}
          onChange={(e) => {
            const temp = options.filter(
              (option) => option.value === e.value
            )?.[0];
            setValue(temp);
            applyWifi(e.value);
          }}
          variant={'standard'}
          label={'Select a wifi connection...'}
        >
          {options.map((option) => {
            return <MenuItem value={option.value}>{option.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <div />
    </>
  );
}

export default WifiSelect;
