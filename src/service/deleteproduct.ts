import { products } from "./addproduct";

export function deleteProduct(name:string){
    let i=products.findIndex((val)=>val.name==name)
    if(i==-1)
    {
        console.log("Product does not exsist ")
    }
    else
    {
        products.splice(i, 1);
    }
}