import { useState } from "react";
import { login } from "../authService";

import '../styles/LoginForm.css';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, senha);
      alert("Login feito com sucesso!");
    } catch (error) {
      setErro("Erro ao fazer login: " + error.message);
    }
  };

  return (
    <form className='container-login-form' onSubmit={handleSubmit}>
      <h2>Entrar</h2>
      <input className="input-email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input className="input-password" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" />
      <button className="input-submit" type="submit">Entrar</button>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </form>
  );
}
