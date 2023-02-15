import React, { useState, useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks/useAppHooksRedux";
import { Button } from "../../shared/Botton";
import { Input } from "../../shared/Input";
import { FormLogin } from "./styles";
import * as CgIcons from "react-icons/cg";
import { TLogin } from "../../../types/componets-types/general";
import { useAuth } from "../../../context/AuthContext";
export const LoginForm = () => {
  const [form, setForm] = useState<TLogin>({ email: "", password: "" });
  let history = useHistory();
  const { signIn } = useAuth()

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handLeSubmit = useCallback(
    (e) => {
      e.preventDefault();
       signIn(form);
      history.push("/");
    },
    [form, history, signIn]
  );

  return (
    <FormLogin style={{ textAlign: "center" }}>
      <div className="text-registro">
        <h2>Identifique-se para prosseguir!</h2>
      </div>
      <form className="form-login" onSubmit={handLeSubmit}>
        <Input
          placeholder="E-email"
          type="text"
          value={form.email}
          name="email"
          onChange={onChange}
        />
        <Input
          placeholder="Palavra pass"
          type="password"
          value={form.password}
          name={"password"}
          onChange={onChange}
        
        />

        <div className="f-access">
          <span>
            Ainda não tem uma conta? <a href="/login">click aqui </a>
          </span>
          <div className="btn-registro">
            <Button
              title="Aceesar"

              showIcon={<CgIcons.CgLogIn />}
            >
              <span>
                <CgIcons.CgLogIn />
              </span>
            </Button>
          </div>
        </div>
      </form>
    </FormLogin>
  );
};
