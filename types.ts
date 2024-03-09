export interface Billboard{
    _id:string
    label:string;
    imageUrl:string
}

export interface Category{
    _id:string;
    name:string;
    billboardId:Billboard
    value:[]
}
export interface Product{
    _id:string;
    categoryId:Category ;
    name:string;
    price:number;
    isFeatured:boolean;
    Propertys:any;
    Images:string[];
}