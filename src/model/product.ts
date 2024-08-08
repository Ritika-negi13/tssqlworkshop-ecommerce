export class Product{
    code!:string;
    name!:string;
    type:string;
    color:string;
    brand:string;
    //availableSize?: string[];
    //avgrating?:string;
    constructor(code:string,name:string,brand:string,type:string,color:string){
            this.code=code;
            this.name=name;
            this.type=type;
            this.color=color;
            this.brand=brand;
    }
}