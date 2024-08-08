import { Product } from "../model/product";
import { products } from "../model/products";

export function addProduct(code:string,name:string,brand:string,type:string,color:string){
    let p=new Product(code,name,brand,type,color);
    products.push(p);
}
