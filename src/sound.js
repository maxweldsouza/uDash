import { execCommand } from './util';

export const parseVolume = (s) => {
  if (!s.startsWith('Simple mixer control'))
      return;

  const re = /\[([0-9]+)%\]/g;

  const matches = s.matchAll(re);

  if (!matches) {
    return;
  }

  const volumes = Array.from(matches).map(match => Number(match[1]));
  if (new Set(volumes).size !== 1) {
    return;
  }
  return volumes[0];
};

export const getVolume = () => {
  return execCommand('amixer -D pulse get Master')
    .then(output => {
      const vol = parseVolume(output);
      return vol;
    });
};

export const applyVolume = (volume) => {
  return execCommand(`amixer -q -D pulse sset Master ${volume}%`);
};


