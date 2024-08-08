import { products } from "../model/products";

export function deleteProduct(name:string){
    let i=products.findIndex((val)=>val.name.toLocaleLowerCase()==name.toLocaleLowerCase())
    try{
        if(i==-1)
        {
            throw new Error("Product does not exsist ")
        }
        else
        {
            products.splice(i, 1);
            console.log("Product deleted")
        }
    }   
    catch(e:any)
    {
        console.log(e.message)
    }
}