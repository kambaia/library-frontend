
import { useState } from "react";
import { booksColumns } from "../../../utils/app";
import CustomTable from "../../shared/tables/CustumerTable";
import { Containner } from "../styles";


export const OverviewBook = () => {

  const [searchName, setSearchName]= useState<string>('');
  const searchData = (search:string)=>{
    console.log(search);
    setSearchName(search);
  }

  return (
    <Containner>
        <CustomTable searchData={searchData} modalCatergory="book-add" title="Todos os livros" columns={booksColumns} rows={[]} />
    </Containner>
  );
};