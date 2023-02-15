import { useState } from "react";
import { autorColumns } from "../../../utils/app";
import CustomTable from "../../shared/tables/CustumerTable";
import { Containner } from "../styles";

export const OverviewAutor = () => {
  const [searchName, setSearchName] = useState<string>("");
  const searchData = (search: string) => {
    console.log(search);
    setSearchName(search);
  };

  return (
    <Containner>
      <CustomTable
        searchData={searchData}
        modalCatergory="author-add"
        title="Todos os autores"
        columns={autorColumns}
        rows={[]}
      />
    </Containner>
  );
};

export default OverviewAutor;
