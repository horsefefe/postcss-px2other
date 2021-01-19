'use strict';

var postcss = require('postcss');
var Px2Other = require('px2other');

module.exports = postcss.plugin('postcss-px2other', function (options) {
  return function (css, result) {
    var oldCssText = css.toString();
    var px2OtherIns = new Px2Other(options);
    var newCssText = px2OtherIns.convert(oldCssText);
    var newCssObj = postcss.parse(newCssText);
    result.root = newCssObj;
  };
});
