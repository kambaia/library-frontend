import React, { ReactNode } from "react";
import { useAppSelector } from "../../store/hooks/useAppHooksRedux";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { ModalCategory } from "../modal/ModalCategory";
import { ContainerWrapper, MainContainerPages } from "./styles";

export const LayoutMain = ({ children }: { children: ReactNode }) => {
  const { isOpen, modalType } = useAppSelector((state) => state).modal;
  return (
    <>
      {isOpen && modalType==="category" && <ModalCategory />}
      <ContainerWrapper>
        <Header />
        {children}
        <Footer />
      </ContainerWrapper>
    </>
  );
};
