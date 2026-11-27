import { useApp } from "../context/useApp.jsx";
import { Search, Bell } from "lucide-react";
import "./Header.css";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";

export default function Header({usuario, aoNavegar, aoSair}) {

  const { tema } = useApp();
  const logoAtual = tema === "light" ? "/logo-sportshub-claro.png" : "/logo-sportshub.png";

  return (
    <header className="header">

    <div className="logo">
        <button
            className="logo-button"
            onClick={() => aoNavegar("home")}
            aria-label="Voltar para a página inicial"
        >
          <img src={logoAtual} alt="SportHub" className="logo-png" fetchPriority="high" />
        </button>
    </div>

      <div className="search-bar">
        <Search size={18} className="search-icon" />

        <input
          type="text"
          placeholder="Buscar por times, jogadores, competições..."
        />
      </div>

      <div className="header-actions">
        <ThemeToggle />

        {usuario ? (
          <>
            <button 
              className="notification-button"
              aria-label="Notificações"
            >
              <Bell size={21} />
            </button>

            <UserMenu usuario={usuario} aoSair={aoSair} />
          </> 

          ) : (
            <div className="auth-buttons">
              <button
                  className="login-button"
                  onClick={() => aoNavegar("login")}
              >
                  Entrar
              </button>

              <button
                  className="register-button"
                  onClick={() => aoNavegar("cadastro")}
              >
                  Cadastrar
              </button>
            </div>
        )}
      </div>

    </header>
  );
}