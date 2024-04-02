import { IData } from "../Redux/reducer/collectionList";

export const categoryFunc=(data:IData[], cat:string):IData[]=>{
    let filteredData= data;
    filteredData=data.filter((val)=>val.body.category?.toLocaleLowerCase().includes(cat.toLocaleLowerCase()))
    console.log("filter data is :",filteredData);
    return filteredData;
}