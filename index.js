"use strict";

const products = require("./products");

module.exports.register = async server => {
   await products.register( server );
};