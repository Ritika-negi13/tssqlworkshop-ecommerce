var read=require('readline-sync')
import { addProduct } from "./service/addproduct"
import { displayProduct } from "./service/displayproduct";
import { deleteProduct } from "./service/deleteproduct";

let flag=true;
while(flag==true){
    console.log("Press 1 to add Product in list");
    console.log("Press 2 to list all Products");
    console.log("Press 3 to delete product from list");
    let i=read.question();
    switch(i){
        case '1':{
            let name=read.question("Enter your product name : ");
            let code=read.question("Enter your product code : ");
            let type=read.question("Enter your product type : ");
            let color=read.question("Enter your product colour : ");
            let brand=read.question("Enter your product brand : ");
            addProduct(code,name,brand,type,color)
            read.question();
            break;
        }
        case '2':{
            displayProduct();
            read.question();
            break;
        }
        case '3':{
            let name=read.question("Enter your product name to delete : ");
            deleteProduct(name);
            read.question();
            break;
        }
        default:{
            read.question();
            flag=false
            break;
        }
    }
}