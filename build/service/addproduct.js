"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = addProduct;
const product_1 = require("../model/product");
const products_1 = require("../model/products");
function addProduct(code, name, brand, type, color) {
    let p = new product_1.Product(code, name, brand, type, color);
    products_1.products.push(p);
}
