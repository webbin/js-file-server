"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PORT = 12300;
const app = express_1.default();
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(PORT);
