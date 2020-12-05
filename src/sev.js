/*
 * @Date: 2020-06-30 15:31:56
 * @LastEditTime: 2020-12-05 17:36:34
 * @Description: file content
 * @Author: zhengweibin
 */

const express = require('express');
const bodyParser = require('body-parser');
const {
  read_temperature
} = require('./temp/temp_read_server');

const PORT = 12300;

const app = express();

// CORS & Preflight request
app.use((req, res, next) => {
  if (req.path !== '/' && !req.path.includes('.')) {
    res.set({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8'
    });
  }
  req.method === 'OPTIONS' ? res.status(204).end() : next();
});

// cookie parser
app.use((req, res, next) => {
  req.cookies = {};
  (req.headers.cookie || '').split(/\s*;\s*/).forEach((pair) => {
    const crack = pair.indexOf('=');
    if (crack < 1 || crack == pair.length - 1) return;
    req.cookies[
      decodeURIComponent(pair.slice(0, crack)).trim()
    ] = decodeURIComponent(pair.slice(crack + 1)).trim();
  });
  next();
});

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// cache
// app.use(cache('2 minutes', (req, res) => res.statusCode === 200));

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/files', function (req, res) {
  console.log('params = ', req.params);
  res.send('nothing');
  res.end();
});

app.get('/temperature', (req, res) => {
  read_temperature()
    .then((result) => {
      res.type('application/json');
      res.send(result);
      res.end();
    }).catch((err) => {
      res.send(err);
      res.end();
    });

});

app.listen(PORT);
console.log('listening on ', PORT);