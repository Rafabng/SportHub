import { useEffect } from "react";
import { X } from "lucide-react";
import "./AvisoLogin.css";

const DURACAO_MS = 6000;

export default function AvisoLogin({ aoFechar }) {
    useEffect(() => {
        const timer = setTimeout(aoFechar, DURACAO_MS);
        return () => clearTimeout(timer);
    }, [aoFechar]);

    return (
        <div className="aviso-login" role="alert">
            <p className="aviso-login__texto">
                Você precisa estar logado para salvar no Favoritos!
            </p>

            <button
                type="button"
                className="aviso-login__fechar"
                aria-label="Fechar aviso"
                onClick={aoFechar}
            >
                <X size={20} />
            </button>
        </div>
    );
}
