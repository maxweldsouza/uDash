import React, { useEffect, useRef, useState } from 'react';
import { Wifi } from 'react-feather';
import { Progress, DiskProgressInner, Value } from './styledComponents';
// import Select from 'react-select';
import { applyWifi, getWifi } from './wifi';
import { useInterval } from 'react-use';
import useClickAway from 'react-use/lib/useClickAway'
import chroma from 'chroma-js';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function WifiSelect() {
  const [wifiNetworks, setWifiNetworks] = useState([]);
  const [value, setValue] = useState<{ value: string, label: string }>('');

  useEffect(() => {
    getWifi().then((w) => {
      setWifiNetworks(w);
    });
  }, []);

  const options = wifiNetworks.map((wifi) => {
    return {
      value: wifi.name,
      label: wifi.name,
    };
  });
  // const selected = wifiNetworks.filter(wifi => wifi?.['in-use'] === '*')?.[0];

  return (
    <>
      <Wifi />
      Wifi
      {/*<Select options={options} isSearchable={true} value={value} onChange={(e) => {*/}
      {/*  const temp = options.filter(option => option.value === e.value)?.[0];*/}
      {/*  setValue(temp);*/}
      {/*  applyWifi(e.value);*/}
      {/*}}/>*/}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={(e) => {
          const temp = options.filter(option => option.value === e.value)?.[0];
          setValue(temp);
          applyWifi(e.value);
        }}
        variant={'standard'}
        label={'Select a wifi connection...'}
      >
        <MenuItem value="" disabled>
          Select a wifi connection...
        </MenuItem>
        {options.map(option => {
          return (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          )
        })}
      </Select>
      <div />
    </>
  );
}

export default WifiSelect;
