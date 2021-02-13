import React, { useEffect, useState } from 'react';
import { Wifi } from 'react-feather';
// import Select from 'react-select';
import { applyWifi, getWifi } from './wifi';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import usePageVisibility from 'use-page-visibility';

function WifiSelect() {
  const [wifiNetworks, setWifiNetworks] = useState([]);
  const [value, setValue] = useState<string>('');
  const [visible, setVisible] = useState(true);

  usePageVisibility((v: boolean) => {
    setVisible(v);
  });

  useEffect(() => {
    if (!visible) return;
    getWifi().then((w) => {
      setWifiNetworks(w);
      const selected = w.filter((wifi: { [x: string]: string; }) => wifi?.['active'] === 'yes')?.[0];
      setValue(selected.name);
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
        <Select
          labelId="demo-simple-select-label"
          value={value}
          onChange={(e) => {
            if (!e.target.value) return;
            const value = String(e.target.value);
            applyWifi(value).then(() => {
              setValue(value);
            });
          }}
          variant={'standard'}
          label={'Select a wifi connection...'}
        >
          {options.map((option) => {
            return <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <div />
    </>
  );
}

export default WifiSelect;
