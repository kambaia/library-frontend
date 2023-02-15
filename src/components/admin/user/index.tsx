
import { useState } from "react";
import { useUsersQuery } from "../../../services/query/useUsers/get";
import { userColumns, userRows } from "../../../utils/app";
import CustomTable from "../../shared/tables/CustumerTable";
import { Containner } from "../styles";

export const OverviewUser = () => {
  const [searchName, setSearchName]= useState<string>('');
  const {
    data,
    isLoading: loading,
    error
  } = useUsersQuery({
    limit: 10,
    page: 0,
    text: searchName,
  });

  const searchData = (search:string)=>{
    setSearchName(search);
  }
  return (
    <Containner>
        <CustomTable 
        searchData={searchData} 
        modalCatergory="add" 
        title="Todos os útilizadores" 
        columns={userColumns} 
        rows={data}
        isLoading={loading}
        error={error} />
    </Containner>
  );
};


