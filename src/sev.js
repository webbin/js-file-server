/*
 * @Date: 2020-06-30 15:31:56
 * @LastEditTime: 2020-06-30 15:33:09
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