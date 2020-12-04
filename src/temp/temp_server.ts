/*
 * @Author: your name
 * @Date: 2020-12-04 23:56:05
 * @LastEditTime: 2020-12-04 23:59:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js-file-server/src/temp/temp_server.ts
 */

import fs from 'fs';

const temp_file_name = 'temp.txt';

const start_server = () => {

}

const write_data = (data = '') => {
  const exist = fs.existsSync(temp_file_name);
  if (!exist) {
    fs.mkdirSync(temp_file_name);
  }
  fs.appendFileSync(temp_file_name, data);
}

write_data('abc');
write_data('---');