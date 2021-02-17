import React, { useEffect, useState } from 'react';
import { Wifi } from 'react-feather';
// import Select from 'react-select';
import { applyWifi, getWifi, Iwifi } from './wifi';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// @ts-ignore
import usePageVisibility from 'use-page-visibility';
import { Check } from './styledComponents';

function WifiSelect() {
  const [wifiNetworks, setWifiNetworks] = useState<Iwifi[]>([]);
  const [value, setValue] = useState<string>('');
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  usePageVisibility((v: boolean) => {
    setVisible(v);
  });

  useEffect(() => {
    if (!visible) return;
    getWifi().then((w: Iwifi[]) => {
      setWifiNetworks(w);
      const selected = w.filter(
        (wifi: Iwifi) => wifi?.['active'] === 'yes'
      )?.[0];
      setValue(selected.uuid);
    });
  }, []);

  const options = wifiNetworks.map((wifi: Iwifi) => {
    return {
      value: wifi.uuid,
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
            setLoading(true);
            applyWifi(value).then(() => {
              setValue(value);
              setLoading(false);
            }).catch(e => {
              setLoading(false);
            });
          }}
          disabled={loading}
          variant={'standard'}
          label={'Select a wifi connection...'}
        >
          {options.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
                {option.value == value && <Check>{'  '}●</Check>}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <div />
    </>
  );
}

export default WifiSelect;
