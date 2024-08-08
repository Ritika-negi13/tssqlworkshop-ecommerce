import { Product } from "../model/product";

export var products:Product[]=[];

export function addProduct(code:string,name:string,type:string,color:string){
    let p=new Product(code,name,type,color);
    products.push(p);
}


// export function insertAvailableSize(size:string[]){
//     size.forEach((val)=>{
//         Product.availableSize.push(val)
//     })
// }