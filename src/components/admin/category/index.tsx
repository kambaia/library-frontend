
import { useState } from "react";
import { categoryColumns, categoryRows } from "../../../utils/app";
import CustomTable from "../../shared/tables/CustumerTable";
import { Containner } from "../styles";

export const OverviewCategory = () => {
  const [searchName, setSearchName]= useState<string>('');
  const searchData = (search:string)=>{
    console.log(search);
    setSearchName(search);
  }
  return (
    <Containner>
        <CustomTable searchData={searchData} modalCatergory="category-add" title="Todas as categorias" columns={categoryColumns} rows={categoryRows} />
    </Containner>
  );
};

export default OverviewCategory;
