import { useState } from 'react';
import './App.css';

import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Estatisticas from "./pages/Estatisticas.jsx";
import Home from "./pages/Home.jsx";
import AvisoLogin from "./components/AvisoLogin.jsx";

const CHAVE_USUARIO = "sporthub_usuario";

function lerUsuarioSalvo() {
    try {
        const salvo = JSON.parse(localStorage.getItem(CHAVE_USUARIO));
        return salvo?.email ? salvo : null;
    } catch {
        return null;
    }
}

function salvarUsuario(usuario) {
    try {
        if (usuario) localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
        else localStorage.removeItem(CHAVE_USUARIO);
    } catch {

    }
}

export default function App() {

    const [usuarioLogado, setUsuarioLogado] = useState(lerUsuarioSalvo);
    const [pagina, setPagina] = useState("home");
    const [aviso, setAviso] = useState({ id: 0, visivel: false });

    function exigirLogin() {
        setAviso((atual) => ({ id: atual.id + 1, visivel: true }));
    }

    function fecharAviso() {
        setAviso((atual) => ({ ...atual, visivel: false }));
    }

    function navegar(proximaPagina) {
        fecharAviso();
        setPagina(proximaPagina);
    }

    function aoLogar(email) {
        const usuario = { email };
        setUsuarioLogado(usuario);
        salvarUsuario(usuario);
        setPagina("home");
    }

    function aoSair() {
        setUsuarioLogado(null);
        salvarUsuario(null);
        setPagina("home");
    }

    return (
        <>
            {pagina === "home" && (
                <Home
                    usuario={usuarioLogado}
                    aoNavegar={navegar}
                    aoSair={aoSair}
                />
            )}

            {pagina === "estatisticas" && (
                <Estatisticas
                    usuario={usuarioLogado}
                    aoNavegar={navegar}
                    aoSair={aoSair}
                    aoExigirLogin={exigirLogin}
                />
            )}

            {pagina === "login" && (
                <Login
                    aoLogar={aoLogar}
                    aoNavegar={navegar}
                />
            )}

            {pagina === "cadastro" && (
                <Cadastro
                    aoLogar={aoLogar}
                    aoNavegar={navegar}
                />
            )}

            {aviso.visivel && <AvisoLogin key={aviso.id} aoFechar={fecharAviso} />}
        </>
    );
}