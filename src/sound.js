const { exec } = require('child_process');
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
  return new Promise((resolve, reject) => {
    exec(`amixer -D pulse get Master`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      const vol = parseVolume(stdout);
      if (typeof vol !== 'undefined') {
        resolve(vol);
      }
    });

  });
};


