/*
 * @Date: 2020-06-30 14:38:47
 * @LastEditTime: 2020-06-30 15:45:39
 * @Description: file content
 * @Author: zhengweibin
 */

const express = require('express');

const PORT = 12300;

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(PORT);
