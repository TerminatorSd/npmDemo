'use strict';

exports.__esModule = true;
var isArr = function isArr(someVar) {
  return Object.prototype.toString.call(someVar).slice(8, -1).toLowerCase() === 'array';
};
// var asb = 'adf';
exports['default'] = isArr;
module.exports = exports['default'];