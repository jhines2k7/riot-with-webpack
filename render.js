/*eslint-env node */
"use strict";

var riot = require("riot");
var myComponent = require("./ui.tag");

var html = riot.render(myComponent);
console.log(html);
