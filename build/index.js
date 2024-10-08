"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var read = require('readline-sync');
const addproduct_1 = require("./service/addproduct");
const displayproduct_1 = require("./service/displayproduct");
const deleteproduct_1 = require("./service/deleteproduct");
const searchproduct_1 = require("./service/searchproduct");
let flag = true;
while (flag == true) {
    console.log("Press 1 to add Product in list");
    console.log("Press 2 to list all Products");
    console.log("Press 3 to search product from list");
    console.log("Press 4 to delete product from list");
    let i = read.question();
    switch (i) {
        case '1': {
            let name = read.question("Enter your product name : ");
            let code = read.question("Enter your product code : ");
            let type = read.question("Enter your product type : ");
            let color = read.question("Enter your product colour : ");
            let brand = read.question("Enter your product brand : ");
            (0, addproduct_1.addProduct)(code, name, brand, type, color);
            read.question();
            break;
        }
        case '2': {
            (0, displayproduct_1.displayProduct)();
            read.question();
            break;
        }
        case '3': {
            let name = read.question("Enter your product name to search : ");
            (0, searchproduct_1.searchProduct)(name);
            read.question();
            break;
        }
        case '4': {
            let name = read.question("Enter your product name to delete : ");
            (0, deleteproduct_1.deleteProduct)(name);
            read.question();
            break;
        }
        default: {
            read.question();
            flag = false;
            break;
        }
    }
}
