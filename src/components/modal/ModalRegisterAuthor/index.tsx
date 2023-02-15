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
import { AuthForm } from "../../Forms/admin-register/authorForm";

type ModalProps = {
  title: string;
  madalName?: string
};

export const ModalRegisterAuthor = ({ title, madalName }: ModalProps) => {
  const { isOpen, modalType, dataModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  React.useEffect(() => {
    verifyModal();
  }, []);
  
  const path = getLastSlash(pathname);
  const verifyModal = () => {
    if (path === "author-add" || "edit") {
      history.push(`/admin/book-register/${path}`);
      dispatch(setVisibleModal({dataModal: { }, isOpen: false, modalType: path}));
    }
  };
  
  const handleClose = () => {
    history.push(`/admin/book-register/${madalName}`);
    dispatch(
      setVisibleModal({
        dataModal: { shshhsh: 11 },
        isOpen: false,
        modalType: "",
      })
    );
  };

  return (
    <div>
      <Modal
        open={isOpen && modalType === path}
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
          <AuthForm data={dataModal}/>
        </Box>
      </Modal>
    </div>
  );
};
