import { TObject } from "../../../types/interface/App";
export const putInSelect = (data: TObject[])=>{
    return data?.map(item=>{
       return  {label: item.type, value: item.id };
    })
}