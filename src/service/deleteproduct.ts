import { products } from "../model/products";

export function deleteProduct(name:string){
    let i=products.findIndex((val)=>val.name.toLocaleLowerCase()==name.toLocaleLowerCase())
    if(i==-1)
    {
        console.log("Product does not exsist ")
    }
    else
    {
        products.splice(i, 1);
        console.log("Product deleted")
    }
}