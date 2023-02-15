import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { CardLogin, Containner, Form } from "./styles";
import bainner from "../../assets/bainner.webp";
import * as FaIcons from "react-icons/fa";

import { LoginForm } from "../../components/Forms/login";
import Registro from "../../components/Forms/Register";
import { userRole } from "../../utils/app";

const Login: React.FC = () => {
  const [acesso, setAcesso] = useState(true);
 
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
      if(pathname ==='/login' && userRole()) {
        history.push('/');
      };
  }, [history, pathname]);


  const onChangePage = (page:string)=>{
     switch(page){
       case '/login':
         history.push('/login')
         break;
      case '/register': 
          history.push('/register')
     }
  }


  return (
    <Containner>
      <CardLogin
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1) 30%, transparent 90%), url(${bainner})`,
        }}
      >
        <div className="eslog">
          <h1>Desfrute dos melhores livros!</h1>
          <span>
            A acessa a sua conta e desfrute dos melhres livros, angolanos,
            brasileiros, grandes univerdades, escritórios nacionais, e muito
            mais.
          </span>
        </div>
        <Form>
          <div className="btn-acesso">
            <button onClick={() => onChangePage('/login')} style={pathname==='/login'? {background: '#fff', color: '#555'}: {}}>
              <span >
                <FaIcons.FaLock color={ pathname==='/login'? `#555`: '#ddd'} />
              </span>
              <span className="title" style={  pathname==='/login'? {color: '#555'  }: {color: '#fff'}}>Leitores</span>
            </button>
            <button onClick={() => onChangePage('/register')} style={pathname==='/register'? {background: '#fff', color: '#555'}: {}}>
              <span>
                <FaIcons.FaLock color={ pathname==='/login'? `#ddd`: '#555'}/>
              </span>
              <span className="title" style={  pathname==='/register'? {color: '#555'  }: {color: '#fff'}}>Registrar</span>
            </button>
          </div>

          {pathname === "/login" && (
            <>
              <LoginForm />
            </>
          )}
          {pathname === "/register" && (
            <>
              <Registro />
            </>
          )}
         
        </Form>
      </CardLogin>
    </Containner>
  );
};

export default Login;
