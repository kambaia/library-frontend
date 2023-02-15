import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styleTitle, styleCard, CloseModal } from "./styles";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../store/hooks/useAppHooksRedux";
import { setVisibleModal } from "../../../store/modal/actions";
import { useHistory, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { getLastSlash } from "../../../utils/app";
import { UserForm } from "../../Forms/admin-register/userForm";
import { usePermissionsQuery } from "../../../services/query/useUsers/ge-permission";

type ModalProps = {
  title: string;
};

export const ModalRegisterUser = ({ title }: ModalProps) => {
  const { isOpen, modalType, dataModal } = useAppSelector(
    (state) => state.modal
  );

  const dispatch = useAppDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  React.useEffect(() => {
    verifyModal();
  }, []);

  console.log(modalType);
  const { data, isLoading: loading } = usePermissionsQuery({
    limit: 1,
    page: 1,
    text: "",
  });

  const verifyModal = () => {
    const path = getLastSlash(pathname);
    console.log(modalType)
    if (path === "add" || "edit") {
      history.push(`/admin/book-register/${modalType}`);
      dispatch(
        setVisibleModal({ ...dataModal, isOpen: true, modalType: modalType })
      );
    }
  };
  let modalData = { ...dataModal };
  const handleClose = () => {
    history.push("/admin/book-register/user");
    dispatch(
      setVisibleModal({
        dataModal: { shshhsh: 11 },
        isOpen: false,
        modalType: "",
      })
    );
  };
  if (loading) {
    return <h1>Processando</h1>;
  }

  return (
    <div>
      <Modal
        open={isOpen && modalType === "add" || modalType === "edit"}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleCard}>
          <CloseModal>
            <div className="modal-close" onClick={() => handleClose()}>
              <CloseIcon />
            </div>
          </CloseModal>
          <Typography
            sx={styleTitle}
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            {title}
          </Typography>
          <UserForm
            permission={data}
            dataFormUser={modalData.dataModal}
            actionModal={modalType}
          />
        </Box>
      </Modal>
    </div>
  );
};
