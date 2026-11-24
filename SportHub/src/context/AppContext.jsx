import { useState, useEffect } from "react";
import { AppContext } from "./contexto.js";

function carregarFavoritos(chave) {
    try {
        const dados = JSON.parse(localStorage.getItem(chave) || "[]");

        return Array.isArray(dados)
            ? dados.filter((id) => typeof id === "string")
            : [];
    } catch {
        return [];
    }
}

function alternarItem(setLista, id) {
    if (!id) return;

    setLista((atual) =>
        atual.includes(id)
            ? atual.filter((item) => item !== id)
            : [...atual, id]
    );
}

export function AppProvider({ children }) {
    const [tema, setTema] = useState(() => {
        const temaSalvo = localStorage.getItem("sporthub_tema");

        return temaSalvo === "light" || temaSalvo === "dark"
            ? temaSalvo
            : "dark";
    });

    const [partidasFavoritas, setPartidasFavoritas] = useState(
        () => carregarFavoritos("sporthub_partidas_favoritas")
    );

    const [timesFavoritos, setTimesFavoritos] = useState(
        () => carregarFavoritos("sporthub_times_favoritos")
    );

    function alternarTema() {
        setTema((temaAtual) =>
            temaAtual === "dark" ? "light" : "dark"
        );
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", tema);
        localStorage.setItem("sporthub_tema", tema);
    }, [tema]);

    useEffect(() => {
        localStorage.setItem(
            "sporthub_partidas_favoritas",
            JSON.stringify(partidasFavoritas)
        );
    }, [partidasFavoritas]);

    useEffect(() => {
        localStorage.setItem(
            "sporthub_times_favoritos",
            JSON.stringify(timesFavoritos)
        );
    }, [timesFavoritos]);

    function alternarPartidaFavorita(id) {
        alternarItem(setPartidasFavoritas, id);
    }

    function alternarTimeFavorito(id) {
        alternarItem(setTimesFavoritos, id);
    }

    function ehPartidaFavorita(id) {
        return partidasFavoritas.includes(id);
    }

    function ehTimeFavorito(id) {
        return timesFavoritos.includes(id);
    }

    return (
        <AppContext.Provider
            value={{
                tema,
                alternarTema,
                partidasFavoritas,
                timesFavoritos,
                alternarPartidaFavorita,
                alternarTimeFavorito,
                ehPartidaFavorita,
                ehTimeFavorito
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
