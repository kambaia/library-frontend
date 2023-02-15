import { ModeEdit } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks/useAppHooksRedux";
import { setVisibleModal } from "../../../store/modal/actions";
import { TObject } from "../../../types/interface/App";

type Props = {
  id: string;
  navigationPath?: string;
  editButton?: boolean;
  deleteButton?: boolean;
  banButton?: boolean;
  activeButton?: boolean;
  editButtonText?: string;
  row: TObject;
};

export const ActionButtons = ({ navigationPath, row }: Props) => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const openModal = () => {
    console.log(navigationPath);
    history.push(`${navigationPath}`);
    dispatch(
      setVisibleModal({
        dataModal: row,
        isOpen: true,
        modalType: "edit",
      })
    );
  };

  return (
    <>
      <Tooltip title="Editar">
        <Button
          onClick={() => {
            openModal();
          }}
          variant="outlined"
          startIcon={<ModeEdit />}
        />
      </Tooltip>
      <Tooltip title="Delete">
        <Button variant="outlined" color="error" startIcon={<ModeEdit />} />
      </Tooltip>
    </>
  );
};
