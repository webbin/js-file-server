"use strict";
/*
 * @Author: your name
 * @Date: 2020-12-04 23:56:05
 * @LastEditTime: 2020-12-04 23:59:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js-file-server/src/temp/temp_server.ts
 */
exports.__esModule = true;
var fs_1 = require("fs");
var temp_file_name = 'temp.txt';
var start_server = function () {
};
var write_data = function (data) {
    if (data === void 0) { data = ''; }
    var exist = fs_1["default"].existsSync(temp_file_name);
    if (!exist) {
        fs_1["default"].mkdirSync(temp_file_name);
    }
    fs_1["default"].appendFileSync(temp_file_name, data);
};
write_data('abc');
write_data('---');
