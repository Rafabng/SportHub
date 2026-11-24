import { Sun, Moon } from "lucide-react";
import { useApp } from "../context/useApp.jsx";
import "./ThemeToggle.css";

export default function ThemeToggle() {
    const { tema, alternarTema } = useApp();

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={alternarTema}
            aria-label={
                tema === "dark" ? "Ativar modo claro" : "Ativar modo escuro"
            } 
            title={
                tema === "dark" ? "Ativar modo claro" : "Ativar modo escuro"
            }
        >
            <Moon
                size={20}
                className={`theme-toggle-icon ${
                    tema === "dark" ? "visible" : ""
                }`}
            />

            <Sun
                size={20}
                className={`theme-toggle-icon ${
                    tema === "light" ? "visible" : ""
                }`}
            />

        </button>
    );
}