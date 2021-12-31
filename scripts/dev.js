/* eslint-disable */
const { spawnSync } = require('child_process');
/* eslint-enable */

const main = () => {
  spawnSync('sudo', ['docker-compose', 'build'], {
    stdio: 'inherit',
  });
  spawnSync('sudo', ['docker-compose', 'up'], {
    stdio: 'inherit',
  });
};

main();
