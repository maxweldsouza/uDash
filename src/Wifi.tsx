import React, { useEffect, useState } from 'react';
import { Wifi } from 'react-feather';
import { Progress, DiskProgressInner, Value } from './styledComponents';
const si = require('systeminformation');
import Select from 'react-select';
import { applyWifi, getWifi } from './wifi';
import { useInterval } from 'react-use';

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: (styles) => ({
    ...styles,
    '-webkit-app-region': 'no-drag',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

function WifiSelect() {
  const [wifiNetworks, setWifiNetworks] = useState([]);
  const [value, setValue] = useState<{ value: string, label: string }>();

  useInterval(() => {
    getWifi().then((w) => {
      setWifiNetworks(w);
    });
  }, 1000);

  const options = wifiNetworks.map((wifi) => {
    return {
      value: wifi.ssid,
      label: wifi.ssid,
    };
  });
  // const selected = wifiNetworks.filter(wifi => wifi?.['in-use'] === '*')?.[0];

  return (
    <>
      <Wifi />
      Wifi
      <Select options={options} styles={colourStyles} isSearchable={true} value={value} onChange={(e) => {
        const temp = options.filter(option => option.value === e.value)?.[0];
        setValue(temp);
        applyWifi(e.value);
      }}/>
      <div />
    </>
  );
}

export default WifiSelect;
