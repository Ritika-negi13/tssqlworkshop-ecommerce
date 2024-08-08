"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = deleteProduct;
const products_1 = require("../model/products");
function deleteProduct(name) {
    let i = products_1.products.findIndex((val) => val.name.toLocaleLowerCase() == name.toLocaleLowerCase());
    if (i == -1) {
        console.log("Product does not exsist ");
    }
    else {
        products_1.products.splice(i, 1);
        console.log("Product deleted");
    }
}
