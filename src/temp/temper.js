/*
 * @Author: your name
 * @Date: 2020-12-05 00:02:22
 * @LastEditTime: 2020-12-05 00:19:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js-file-server/src/temp/temper.js
 */

const fs = require('fs');
const {
  execSync
} = require('child_process');

const temp_file_name = 'temp.txt';

const parse_temperature = (input = 'Temp=15.9*  Humidity=58.9%') => {

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
  const buf = execSync('python3 /home/webbin/py_project/Adafruit_Python_DHT/examples/AdafruitDHT.py 22 4');
  const text = String(buf);
  console.log(text);
  write_data(text);
};

const write_data = (data = '') => {
  const exist = fs.existsSync(temp_file_name);
  if (!exist) {
    fs.writeFileSync(temp_file_name, '');
  }
  fs.appendFileSync(temp_file_name, data + '\n');
};

// write_data('abc');
// write_data('---');
// parse_temperature();

const start_server = () => {
  setInterval(() => {
    read_temperature();
  }, 1000 * 10);
};

start_server();