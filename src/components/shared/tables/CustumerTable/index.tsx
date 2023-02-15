import { Button } from "@mui/material";
import DataTable from "react-data-table-component";
import { Input } from "../../Input";
import { useHistory } from "react-router-dom";
import { setVisibleModal } from "../../../../store/modal/actions";
import { useAppDispatch } from "../../../../store/hooks/useAppHooksRedux";
import { CustomLoader } from "../../Loading";
type TableProps = {
  rows: any;
  columns: any;
  title: string;
  noDataComponentText?: string;
  modalCatergory: string;
  searchData: (value: string) => void;
  isLoading?: boolean;
  error?: Error | null;
};

export default function CustomTable({
  modalCatergory,
  searchData,
  rows,
  columns,
  title,
  noDataComponentText = "Nenhuma informação para ser listada no momento",
}: TableProps) {
  const history = useHistory();
  const dispatch = useAppDispatch();
  console.log(modalCatergory)
  const openModal = () => {
    history.push(`/admin/book-register/${modalCatergory}`);
    dispatch(
      setVisibleModal({
        dataModal: rows[0],
        isOpen: false,
        modalType: modalCatergory,
      })
    );
  };
  return (
    <div style={{ height: 500, width: "700" }}>
      <DataTable
        title={title}
        data={rows}
        columns={columns}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        progressComponent={<CustomLoader />}
        actions={
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="success"
              onClick={() => openModal()}
            >
              Registar
            </Button>
          </div>
        }
        noDataComponent={<p>{noDataComponentText}</p>}
        subHeader
        subHeaderComponent={
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Input
              onChange={(e) => searchData(e.target.value)}
              style={{ width: "300px" }}
              placeholder="Pesquisa aqui"
              name="userSearch"
            />
          </div>
        }
      />
    </div>
  );
}
