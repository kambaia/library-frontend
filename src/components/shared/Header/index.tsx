import React, { useState, useEffect, useContext } from "react";
import logo from "../../../assets/logo.png";
import { Containner, DropDown, TopMenuBar } from "./styles";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

/**************reduce */
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../context/context";
import { options } from "../../../utils/languages";
import { setVisibleModal } from "../../../store/modal/actions";
import { useAppDispatch } from "../../../store/hooks/useAppHooksRedux";
import {
  logout,
  pathRouer,
  ROLES_ADMIN,
  userAccess,
  userRole,
} from "../../../utils/app";
import { TAccessUser } from "../../../types/interface/UserInterface";
import { useAuth } from "../../../context/AuthContext";

export default function Header() {
  const [actualLanguage, setActualLanguage] = useState(
    window.localStorage.getItem("lang")
  );
  const { language, setLanguage } = useContext(LanguageContext);
  const [option, setOption] = useState(false);
  const { pathname } = useLocation();
  const [menuDrop, setMenuDrop] = useState(false);
  const [user, setUser] = useState<TAccessUser>();

  const history = useHistory();
  const { user: userLoged } = useAuth();
  const dispatch = useAppDispatch();

  const navegationRouter = (pathname: string) => {
    const role = userRole() as string;

    const path = pathRouer(role, pathname);

    switch (path.router) {
      case "public":
        history.push(`${pathname}`);
        break;
      case "private":
        history.push(`${pathname}`);
        break;
      default:
        history.push(`${pathname}`);
    }
  };

  const onLogout = () => {
    logout();
    history.push("/login");
  };

  useEffect(() => {
    setActualLanguage(window.localStorage.getItem("lang"));
  }, []);

  useEffect(() => {
    const user = userAccess() || userLoged;
    console.log(user);
    if (user && window.localStorage.getItem("@bucaso:user")) {
      setUser(user);
    } else {
      const userLogged = window.localStorage.getItem("@bucaso:user");
      setUser(user || userLogged);
    }
  }, []);

  const onChooseLanguage = (value: string, lang: string) => {
    setActualLanguage(lang);
    window.localStorage.setItem("language", value);
    window.localStorage.setItem("lang", lang);
    setLanguage(value);
    setOption(!option);
  };

  const openModal = () => {
    dispatch(setVisibleModal({dataModal: {shshhsh: 11}, isOpen: false, modalType: 'category'}));
  };

  return (
    <Containner>
      <TopMenuBar>
        <div className="logo" onClick={() => navegationRouter("/")}>
          <img src={logo} alt="Logo" height={80} width={80} />
        </div>
        <DropDown>
          <div
            className="dropdown"
            onClick={() => {
              setMenuDrop(!menuDrop);
            }}
          >
            <button className="dropbtn">
              <span className="name">
                {actualLanguage ? actualLanguage : "Portuguese"}
              </span>
              <FiIcons.FiChevronDown />
            </button>
            <div
              className="dropdown-content"
              style={{ display: menuDrop ? "block" : "none" }}
            >
              {options.map((item, index) => (
                <ul key={index}>
                  <li onClick={() => onChooseLanguage(item.value, item.label)}>
                    {item.label}
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div>
            <AiIcons.AiOutlineMenuFold
              color="#fff"
              size={30}
              onClick={openModal}
            />
          </div>
        </DropDown>
      </TopMenuBar>
      <ul className="content">
        <div className="public">
          <div className="private-menu">
            <li>
              <Link
                to="/books"
                style={{ color: pathname === "/books" ? "#b18336" : "#555" }}
              >
                <span>
                  <FaIcons.FaBook color="#0c854e" size={30} />
                </span>
                <span>Livros</span>
              </Link>
            </li>

            {userRole() ? (
              <>
                <li>
                  <Link
                    to="/books/monography"
                    style={{
                      color:
                        pathname === "/books/monography" ? "#b18336" : "#555",
                    }}
                  >
                    <span>
                      <FaIcons.FaBookReader color="#0c854e" size={30} />
                    </span>
                    <span>Monografia</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/favorite"
                    style={{
                      color: pathname === "/favorite" ? "#b18336" : "#555",
                    }}
                  >
                    <MdIcons.MdFavoriteBorder color="#0c854e" size={30} />
                    <span>Favoritos</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/books-to-reading"
                    style={{
                      color:
                        pathname === "/books-to-reading" ? "#b18336" : "#555",
                    }}
                  >
                    <BsIcons.BsBookHalf color="#0c854e" size={30} />
                    <span>Livros a ler</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    style={{
                      color: pathname === "/profile" ? "#b18336" : "#555",
                    }}
                  >
                    <FaIcons.FaUserCircle color="#0c854e" size={30} />
                    <span> Perfil Meu</span>
                  </Link>{" "}
                </li>
                {userRole() && userRole() === ROLES_ADMIN ? (
                  <li className="sub-menu">
                    <Link
                      to="/admin-register"
                      style={{
                        color:
                          pathname === "/admin/Dashboard/payment" || 
                          pathname === "/admin/user/profile" || 
                          pathname === "/admin/book-register/user" ? "#b18336" : "#555",
                      }}
                    >
                      <MdIcons.MdOutlinePlaylistAdd color="#0c854e" size={30} />
                      <span> Registar</span>
                    </Link>{" "}
                    <div className="drow-menu">
                      <ul>
                        <li className="">
                          <Link
                            to="/admin/Dashboard/payment"
                            style={{
                              color:
                                pathname === "/admin/Dashboard"
                                  ? "#b18336"
                                  : "#555",
                            }}
                          >
                            <RiIcons.RiDashboardFill
                              color="#0c854e"
                              size={30}
                            />
                            <span> Dashboard</span>
                          </Link>{" "}
                        </li>
                        
                        <li className="">
                          <Link
                            to="/admin/book-register/user"
                            style={{
                              color:
                                pathname === "/admin/book-register/user"
                                  ? "#b18336"
                                  : "#555",
                            }}
                          >
                            <MdIcons.MdOutlinePlaylistAdd
                              color="#0c854e"
                              size={30}
                            />
                            <span>Registros Livros</span>
                          </Link>{" "}
                        </li>
                      </ul>
                    </div>
                  </li>
                ) : null}
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/books"
                    style={{
                      color: pathname === "/books" ? "#b18336" : "#555",
                    }}
                  >
                    <span>
                      <FaIcons.FaBook color="#0c854e" size={30} />
                    </span>
                    <span>Contacto</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/books"
                    style={{
                      color: pathname === "/books" ? "#b18336" : "#555",
                    }}
                  >
                    <span>
                      <FaIcons.FaBook color="#0c854e" size={30} />
                    </span>
                    <span>Sobre</span>
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link
                to="/publicity"
                style={{
                  color: pathname === "/publicity" ? "#b18336" : "#555",
                }}
              >
                <span>
                  <FaIcons.FaBook color="#0c854e" size={30} />
                </span>
                <span>Publicidade</span>
              </Link>
            </li>
          </div>
          <div className="pesquisar">
            <select>
              <option>Todos</option>
              <option>Titulo</option>
              <option>Autor</option>
              <option>Descrição</option>
              <option>Tema</option>
            </select>
            <input placeholder="Buscar por um livro, Ex: A fitoria de estudar" />
            <button>
              <FaIcons.FaSearch />
            </button>
          </div>
        </div>
        {userRole() ? (
          <div className="access-menu">
            <li className="user-loged">
              <div>
                <img
                  className="profile"
                  src={user?.userProfile}
                  alt="profile"
                />
              </div>
              <div className="user">
                <span className="user-name">{user?.userName}</span>
                <span className="user-email">{user?.email}</span>
              </div>
            </li>
            <li>
              <div className="logout-menu" onClick={() => onLogout()}>
                <span>
                  <FiIcons.FiLogIn size={25} />
                </span>
                <span>Sair</span>
              </div>
            </li>
          </div>
        ) : (
          <div className="login">
            <li>
              <Link
                to="/login"
                style={{ color: pathname === "/login" ? "#b18336" : "#555" }}
              >
                <span>
                  <FiIcons.FiLogIn size={25} />
                </span>
                <span>Acessa</span>
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                style={{ color: pathname === "/register" ? "#b18336" : "#555" }}
              >
                Registros
              </Link>
            </li>{" "}
          </div>
        )}
      </ul>
    </Containner>
  );
}
