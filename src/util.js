const { exec } = require('child_process');

export const execCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return reject(error.message);
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return reject(stderr);
      }
      resolve(stdout);
    });
  });
};

// hues
const RED = 0;
const YELLOW = 60;
const GREEN = 120;

export const tempHue = (temp) => {
  if (temp > 80) {
    return RED;
  } else if (temp > 60) {
    return YELLOW;
  }
  return GREEN;
}

export const diskHue = (usage) => {
  if (usage > 90) {
    return RED;
  } else if (usage > 70) {
    return YELLOW;
  }
  return GREEN;
}
