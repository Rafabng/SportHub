import logo from "../assets/logo-sportshub.png";
import { Search, Bell } from "lucide-react";
import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <img src={logo} alt="Logo" className="logo-png" />
      </div>

      <div className="search-bar">
        <Search size={18} className="search-icon" />

        <input
          type="text"
          placeholder="Buscar por times, jogadores, competições..."
        />
      </div>

      <div className="header-actions">

        <button className="notification-button">
          <Bell size={21} />
        </button>

        <button className="user-button">
          <div className="user-avatar">
            R
          </div>
        </button>

      </div>

    </header>
  );
}

export default Header;