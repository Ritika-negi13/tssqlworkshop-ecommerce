"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
exports.addProduct = addProduct;
const product_1 = require("../model/product");
exports.products = [
    {
        name: 'Blazer',
        code: '123',
        type: 'Sneakers',
        color: "White",
        brand: "Nike"
    },
    {
        name: 'Air Force',
        code: '125',
        type: 'Shoes',
        color: "White",
        brand: "Nike"
    },
    {
        name: ' Air Jordan',
        code: '124',
        type: 'Shoes',
        color: "white and black",
        brand: "Nike"
    },
    {
        name: 'Air Force 1',
        code: '1212',
        type: 'Sneakers',
        color: "Black",
        brand: "Nike"
    },
    {
        name: 'Alpha Bounce',
        code: '1223',
        type: 'Running Shoes',
        color: "White",
        brand: "Adidas"
    },
];
function addProduct(code, name, brand, type, color) {
    let p = new product_1.Product(code, name, brand, type, color);
    exports.products.push(p);
}
