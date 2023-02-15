import React from "react";
import { Link } from "react-router-dom";
import { Containner, ContentBody } from "./styles";
import * as FaIcons from "react-icons/fa";
import { useAppDispatch } from "../../../store/hooks/useAppHooksRedux";
import { closeModal } from "../../../store/modal/actions";
export const ModalCategory = ({ modalId = 'Modal'}) => {
  const dispatch = useAppDispatch();

  const handleCloseModal = (e: React.MouseEvent<HTMLElement> | any) => {
    e.preventDefault();
    if(e.target.id !== modalId ) return;
    dispatch(closeModal({}));
  };

  return (
    <Containner onClick={handleCloseModal} id={modalId}>
      <ContentBody>
        <div className="top">
          <h3>Faça a sua escolha</h3>
        </div>
        <ul>
          <li>
            {" "}
            <Link to={`/livros/`}>
              {" "}
              <span>
                {" "}
                <FaIcons.FaAngleRight size={20}/>{" "}
              </span>
              <span>Categrias</span>
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={`/livros/`}>
              {" "}
              <span>
                {" "}
                <FaIcons.FaAngleRight size={20}/>{" "}
              </span>
              <span>Categrias</span>
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={`/livros/`}>
              {" "}
              <span>
                {" "}
                <FaIcons.FaAngleRight size={20}/>{" "}
              </span>
              <span>Categrias</span>
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={`/livros/`}>
              {" "}
              <span>
                {" "}
                <FaIcons.FaAngleRight size={20}/>{" "}
              </span>
              <span>Categrias</span>
            </Link>{" "}
          </li>
        </ul>
      </ContentBody>
    </Containner>
  );
};
