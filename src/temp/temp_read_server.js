/*
 * @Author: your name
 * @Date: 2020-12-05 17:19:28
 * @LastEditTime: 2020-12-05 17:29:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js-file-server/src/temp/temp_read_server.js
 */
const {
  execSync,
  exec
} = require('child_process');

const parse_temperature = (input = 'Temp=00*  Humidity=00%') => {

  let [pair1, pair2] = input.split('*');

  pair2 = pair2.trim();

  const [unit, temperature] = pair1.split('=');
  const [u, humidity] = pair2.split('=');
  // console.log(temperature, humidity);
  return {
    temperature,
    humidity
  };
};

const read_temperature = () => {
  return new Promise((resolve, reject) => {
    const cmd = 'python3 /home/webbin/py_project/Adafruit_Python_DHT/examples/AdafruitDHT.py 22 4';
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
      if (stderr) {
        reject(stderr);
        return;
      }
      const text = String(stdout);
      const data = parse_temperature(text);
      resolve(data);
    });
  });

};

module.exports = {
  read_temperature
};