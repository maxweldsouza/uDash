import { execCommand } from './util';

const fields = 'name,type,timestamp,active,device,state,uuid';

export interface Iwifi {
  name: string;
  type: string;
  timestamp: string;
  active: string;
  device: string;
  state: string;
  uuid: string;
}

export const unique = (networks: Iwifi[]) => {
  const seen : { [key: string]: boolean }= {};
  let result = [];
  for (let wifi of networks) {
    if (wifi.uuid && !seen[wifi.uuid]) {
      result.push(wifi);
      seen[wifi.uuid] = true;
    }
  }
  return result;
};

export const parseOutput = (output: string) => {
  let keys = fields.split(',');
  let lines = output.split(/\r?\n/);
  let result = [];
  for (let line of lines) {
    let wifi : any = {};
    let values = line.split(':');
    for (let i = 0; i < values.length; i++) {
      wifi[keys[i]] = values[i];
      result.push(wifi);
    }
  }
  return unique(result);
};

export const filterWifi = (conns: Iwifi[]) => {
  return conns.filter(x => x.type !== 'bridge');
}

export const getWifi = async () => {
  const output : any = await execCommand(`nmcli -t -f ${fields} c`);
  return filterWifi(unique(parseOutput(output)));
};

export const applyWifi = async (name: string) => {
  await execCommand(`nmcli c up "${name}"`);
};

