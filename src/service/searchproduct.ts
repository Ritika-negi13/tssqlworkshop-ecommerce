import { products } from "../model/products";
import { deleteProduct } from "./deleteproduct";

export function searchProduct(name:string){
    let i=products.findIndex((val)=>val.name.toLocaleLowerCase()==name.toLocaleLowerCase())
    if(i==-1)
    {
        console.log("Product does not exsist ")
    }
    else
    {
        console.log(products[i]);
        deleteProduct(name);
    }
}