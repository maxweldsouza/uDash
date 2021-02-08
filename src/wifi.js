import { execCommand } from './util';

const fields = 'ssid,signal,in-use,security';
;

export const unique = (networks) => {
  const seen = {};
  let result = [];
  for (let wifi of networks) {
    if (wifi.ssid && !seen[wifi.ssid]) {
      result.push(wifi);
      seen[wifi.ssid] = true;
    }
  }
  return result;
};

export const parseOutput = (output) => {
  let keys = fields.split(',');
  let lines = output.split(/\r?\n/);
  let result = [];
  for (let line of lines) {
    let wifi = {};
    let values = line.split(':');
    for (let i = 0; i < values.length; i++) {
      wifi[keys[i]] = values[i];
      result.push(wifi);
    }
  }
  return unique(result);
};

export const getWifi = async () => {
  const output = await execCommand(`nmcli -t -f ${fields} d wifi list`);
  return parseOutput(output);
};

export const applyWifi = async (ssid) => {
  await execCommand(`nmcli c up "${ssid}"`);
};
