"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = deleteProduct;
const addproduct_1 = require("./addproduct");
function deleteProduct(name) {
    let i = addproduct_1.products.findIndex((val) => val.name == name);
    if (i == -1) {
        console.log("Product does not exsist ");
    }
    else {
        addproduct_1.products.splice(i, 1);
    }
}
