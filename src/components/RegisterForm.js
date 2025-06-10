import { useState } from "react";
import { register } from "../authService";

import '../styles/RegisterForm.css';

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, senha);
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      setErro("Erro ao cadastrar: " + error.message);
    }
  };

  return (
    <form className="container-register-form" onSubmit={handleSubmit}>
      <h2>Cadastrar</h2>
      <input className="input-email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input className="input-password" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" />
      <button className="input-submit" type="submit">Cadastrar</button>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </form>
  );
}
