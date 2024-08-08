"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProduct = searchProduct;
const products_1 = require("../model/products");
const deleteproduct_1 = require("./deleteproduct");
function searchProduct(name) {
    let i = products_1.products.findIndex((val) => val.name.toLocaleLowerCase() == name.toLocaleLowerCase());
    if (i == -1) {
        console.log("Product does not exsist ");
    }
    else {
        console.log(products_1.products[i]);
        (0, deleteproduct_1.deleteProduct)(name);
    }
}
