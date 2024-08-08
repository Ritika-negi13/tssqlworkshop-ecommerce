"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    //availableSize?: string[];
    //avgrating?:string;
    constructor(code, name, brand, type, color) {
        this.code = code;
        this.name = name;
        this.type = type;
        this.color = color;
        this.brand = brand;
    }
}
exports.Product = Product;
