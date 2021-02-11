import React, { useEffect, useRef, useState } from 'react';
import { Wifi } from 'react-feather';
import { Progress, DiskProgressInner, Value } from './styledComponents';
import Select from 'react-select';
import { applyWifi, getWifi } from './wifi';
import { useInterval } from 'react-use';
import useClickAway from 'react-use/lib/useClickAway'
import chroma from 'chroma-js';

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
  control: styles => ({ ...styles, backgroundColor: '#000' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma('red');
    return {
      ...styles,
      backgroundColor: '#000',
      color: '#fff',
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: '#000',
      },
    };
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({
    ...styles,
    ...dot(),
    color: '#000',
    background: 'red'
  }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

function WifiSelect() {
  const [wifiNetworks, setWifiNetworks] = useState([]);
  const [value, setValue] = useState<{ value: string, label: string }>();

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
      <Select options={options} isSearchable={true} value={value} onChange={(e) => {
        console.log('e: ', e);
        const temp = options.filter(option => option.value === e.value)?.[0];
        setValue(temp);
        applyWifi(e.value);
      }}/>
      <div />
    </>
  );
}

export default WifiSelect;
