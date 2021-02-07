import { execCommand } from './util';

export const parseMonitors = (xrandrOutput) => {
  const lines = xrandrOutput.split(/\r?\n/);
  const filtered = lines.filter(x => {
    return x.match(/^(.+) connected/) || x.match(/\sBrightness: ([.0-9]+)/);
  });
  const result = {};
  for (let i = 0; i < filtered.length; i += 2) {
    const nameMatch = filtered[i].match(/^(.+) connected/);
    const name = nameMatch?.[1];
    const brightnessMatch = filtered[i+1].match(/\sBrightness: ([.0-9]+)/);
    const brighness = Number(brightnessMatch?.[1]);
    result[name] = brighness;
  }
  return result;
};

export const getBrightness = async () => {
  const output = await execCommand('xrandr --verbose');
  return parseMonitors(output);
};

export const applyBrightness = (monitors, brightness) => {
  if (brightness < 0.3)
    return;
  monitors.forEach(monitor => execCommand(`xrandr --output ${monitor} --brightness ${brightness}`));
};
