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
