import React, { useState } from "react";
import { Form } from "./styles";
import * as BIIcons from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Input } from "../../shared/Input";
import { Button } from "../../shared/Botton";

export default function Registro() {
  const [form, setForm] = useState<any>({});
  const dispatch = useDispatch();

  const onChange = (e:any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <Form style={{ textAlign: "center" }}>
      <div className="text-registro">
        <h2>Crie uma conta e desfrute dos melhores livros que há no Cemu</h2>
      </div>
      <form>
        <Input
         name="name"
         label="Insera o nome do usuário"
         placeholder="Nome"
         value={form.name}
         onChange={onChange}      
        />
        <Input
          placeholder="Telefone"
          type="text"
          value={form.telefone}
          name={"telefone"}
          onChange={onChange} label={""}        />
        <Input
          placeholder="E-email"
          type="text"
          value={form.email}
          name={"email"}
          onChange={onChange} label={""}        />
        <Input
          placeholder="Nº de matricula"
          type="text"
          value={form.numero_m}
          name={"numero_m"}
          onChange={onChange} label={""}    
        />
        <Input
          placeholder="senha"
          type="password"
          value={form.senha}
          name={"senha"}
          onChange={onChange} label={""}    
        />
      </form>
      <div className="f-registro">
        Já tens uma conta? <a href="/login">click aqui </a>
        <div className="btn-registro">
          <Button title={"Registro"} showIcon={<BIIcons.BiLogIn />}>
            <span>
              <BIIcons.BiLogIn />
            </span>
          </Button>
        </div>
      </div>
    </Form>
  );
}
