import BasicTabs from "../../../components/shared/Tabs";
import "./styles";
import { Containner } from "./styles";
import {
  OverviewAutor,
  OverviewBook,
  OverviewCategory,
  OverviewUser,
} from "../../../components/admin";
import { useLocation } from "react-router-dom";
import { getLastSlash } from "../../../utils/app";
import { ModalRegisterUser } from "../../../components/modal/ModalRegisterUser";
import { ModalRegisterCategory } from "../../../components/modal/ModalRegisterCategory";
import { ModalRegisterAuthor } from "../../../components/modal/ModalRegisterAuthor";
import { ModalRegisterBook } from "../../../components/modal/ModalRegisterBook";
export const tabComponents = {
  tabs: [
    { label: "Usuário", numberTab: 0 },
    { label: "Categoria", numberTab: 1 },
    { label: "AUTOR", numberTab: 2 },
    { label: "Livro", numberTab: 3 },
  ],
  components: [
    { component: <OverviewUser />, idComponent: 0 },
    { component: <OverviewCategory />, idComponent: 1 },
    { component: <OverviewAutor />, idComponent: 2 },
    { component: <OverviewBook />, idComponent: 3 },
  ],
};

const AdminRegiste = () => {
  const { pathname } = useLocation();
  const page = getLastSlash(pathname);
  switch (page) {
    case "add":
    case "edit":
      return (
        <Containner>
          <ModalRegisterUser title="Registro de útilizadores" />
        </Containner>
      );
    case "category-add":
      return (
        <Containner>
          <ModalRegisterCategory title="Registro de Categoria" />
        </Containner>
      );
      case "author-add":
      return (
        <Containner>
          <ModalRegisterAuthor title="Registro de Autores" madalName="author"/>
        </Containner>
      );
      case "book-add":
        return (
          <Containner>
            <ModalRegisterBook title="Registro de Livros" modalName="book"/>
          </Containner>
        );

    default:
      return (
        <Containner>
          <div className="MainDash">
            <BasicTabs
              tabs={tabComponents.tabs}
              components={tabComponents.components}
            />
          </div>
        </Containner>
      );
  }
};

export default AdminRegiste;
