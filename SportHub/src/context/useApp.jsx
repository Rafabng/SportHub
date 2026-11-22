import { useContext } from "react";
import { AppContext } from "./contexto.js";

export function useApp() {
    const contexto = useContext(AppContext);

    if (!contexto) {
        throw new Error("useApp deve ser utilizado dentro de AppProvider");
    }

    return contexto;
}