const { exec } = require('child_process');

export const execCommand = (command: string) => {
  return new Promise((resolve, reject) => {
    exec(command, { encoding: 'utf8' }, (error: { message: any; }, stdout: unknown, stderr: string | any[]) => {
      if (error) {
        return reject(error.message);
      }
      if (stderr.length > 0) {
        return reject(stderr);
      }
      resolve(stdout);
    });
  });
};

// hues
export const RED = 0;
export const YELLOW = 60;
export const GREEN = 120;

export const tempHue = (temp: number) => {
  if (temp > 80) {
    return RED;
  } else if (temp > 60) {
    return YELLOW;
  }
  return GREEN;
};

export const diskHue = (usage: number) => {
  if (usage > 90) {
    return RED;
  } else if (usage > 70) {
    return YELLOW;
  }
  return GREEN;
};
