import { products } from "../model/products";
import { deleteProduct } from "./deleteproduct";

export function searchProduct(name:string){
    let i=products.findIndex((val)=>val.name.toLocaleLowerCase()==name.toLocaleLowerCase())
    try{
        if(i==-1)
        {
            throw new Error("Product does not exsist ")
        }
        else
        {
            console.log(products[i]);
            deleteProduct(name);
        }
    }
    catch(e:any){
        console.log(e.message)
    }
}