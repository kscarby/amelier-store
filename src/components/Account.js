// src/components/Account.js
import useAuth from "../useAuth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import '../styles/Account.css';

export default function Account() {
  const { user, loading, logout } = useAuth();

  if (loading) return <p>Carregando sessão...</p>;

  if (!user) {
    return (
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        <LoginForm />
        <RegisterForm />
      </div>
    );
  }

  return (
    <div className="container-account" style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Bem-vindo, {user.email}!</h2>
      <button onClick={logout}>Sair</button>
    </div>
  );
}
