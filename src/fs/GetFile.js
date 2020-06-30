/*
 * @Date: 2020-06-30 15:36:59
 * @LastEditTime: 2020-06-30 15:40:06
 * @Description: file content
 * @Author: zhengweibin
 */

const fs = require('fs');
const nodePath = require('path');

const RootPath = '/Users/edz/Public';

export const readDir = (path = '') => {
  const targetPath = nodePath.join(RootPath, path);
  return fs.readdirSync(targetPath);
};
