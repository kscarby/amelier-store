import useAuth from "../useAuth";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function AuthManager() {
  const { user, loading, logout } = useAuth();

  if (loading) return <p>Carregando...</p>;

  if (!user) {
    return (
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        <LoginForm />
        <RegisterForm />
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Bem-vindo, {user.email}!</h2>
      <button onClick={logout}>Sair</button>
    </div>
  );
}
