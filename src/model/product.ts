export class Product{
    code!:string;
    name!:string;
    type:string;
    color:string;
    //availableSize?: string[];
    avgrating?:string;
    constructor(code:string,name:string,type:string,color:string){
            this.code=code;
            this.name=name;
            this.type=type;
            this.color=color;
    }
}