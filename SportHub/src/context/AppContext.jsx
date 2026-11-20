import { useState, useEffect } from "react";
import { AppContext } from "./contexto.js";

export function AppProvider({ children }) {

    // const [tema, setTema] = useState("dark");

    const [tema, setTema] = useState(() => {
        const temaSalvo = localStorage.getItem("sporthub_tema");

        return temaSalvo === "light" || temaSalvo === "dark" ? temaSalvo : "dark";
    });

    function alternarTema() {
        setTema((temaAtual) => 
            temaAtual == "dark" ? "light" : "dark"
        );
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", tema);

        localStorage.setItem("sporthub_tema", tema);
    }, [tema]);

    return (
        <AppContext.Provider
            value={{tema, alternarTema}}
        >
            {children}
        </AppContext.Provider>
    );
}