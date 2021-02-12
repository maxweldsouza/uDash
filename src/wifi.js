import { execCommand } from './util';

const fields = 'name,type,timestamp,active,device,state';
;

export const unique = (networks) => {
  const seen = {};
  let result = [];
  for (let wifi of networks) {
    if (wifi.name && !seen[wifi.name]) {
      result.push(wifi);
      seen[wifi.name] = true;
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

export const filterWifi = (conns) => {
  return conns.filter(x => x.type !== 'bridge');
}

export const getWifi = async () => {
  const output = await execCommand(`nmcli -t -f ${fields} c`);
  return filterWifi(parseOutput(output));
};

export const applyWifi = async (name) => {
  await execCommand(`nmcli c up "${name}"`);
};
