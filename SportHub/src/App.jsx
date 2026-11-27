import { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';

import Home from "./pages/Home.jsx";
import AvisoLogin from "./components/AvisoLogin.jsx";

// A Home carrega junto com o app (é a primeira tela). As demais só são baixadas
// quando o usuário chega nelas, o que deixa o carregamento inicial mais leve.
const Login = lazy(() => import("./pages/Login.jsx"));
const Cadastro = lazy(() => import("./pages/Cadastro.jsx"));
const Estatisticas = lazy(() => import("./pages/Estatisticas.jsx"));

// Mostrado por um instante enquanto o código da página é baixado
function Carregando() {
    return (
        <p
            role="status"
            style={{ padding: "48px 20px", textAlign: "center", color: "var(--cor-texto-secundario)" }}
        >
            Carregando…
        </p>
    );
}

// Cada página tem uma URL: abrir /estatisticas leva direto a ela (e o Lighthouse consegue testá-la)
const ROTAS = {
    home: "/",
    estatisticas: "/estatisticas",
    login: "/login",
    cadastro: "/cadastro",
};

function paginaDaUrl() {
    const caminho = window.location.pathname.replace(/\/+$/, "") || "/";
    return Object.keys(ROTAS).find((pagina) => ROTAS[pagina] === caminho) ?? "home";
}

// Qual página cada esporte da NavBar abre. "Todos" e "Futebol" usam a Home.
// Esporte que não está aqui ainda não tem página, então o clique não faz nada.
// (Basquete: quando a página existir, acrescente  basquete: "basquete",  aqui e em ROTAS.)
const PAGINA_DO_ESPORTE = {
    todos: "home",
    futebol: "home",
};

// Qual esporte fica marcado na NavBar ao estar numa página:
// mantém o atual se ele pertencer à página (ex.: Futebol na Home), senão usa o primeiro dela.
function esporteDaPagina(pagina, atual) {
    const esportes = Object.keys(PAGINA_DO_ESPORTE).filter((id) => PAGINA_DO_ESPORTE[id] === pagina);
    if (esportes.length === 0) return atual; // página sem esporte (login, estatísticas...)
    return esportes.includes(atual) ? atual : esportes[0];
}

const CHAVE_USUARIO = "sporthub_usuario";

// Lê o usuário salvo (se houver) quando o app abre ou é recarregado
function lerUsuarioSalvo() {
    try {
        const salvo = JSON.parse(localStorage.getItem(CHAVE_USUARIO));
        return salvo?.email ? salvo : null;
    } catch {
        return null; // JSON inválido ou localStorage indisponível
    }
}

function salvarUsuario(usuario) {
    try {
        if (usuario) localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
        else localStorage.removeItem(CHAVE_USUARIO);
    } catch {
        // sem acesso ao localStorage: o login vale só até recarregar
    }
}

export default function App() {

    const [usuarioLogado, setUsuarioLogado] = useState(lerUsuarioSalvo);
    const [pagina, setPagina] = useState(paginaDaUrl);
    const [esporte, setEsporte] = useState(() => esporteDaPagina(paginaDaUrl(), "todos"));
    const [aviso, setAviso] = useState({ id: 0, visivel: false });

    function exigirLogin() {
        // o id novo reinicia a animação e o tempo se o aviso já estava na tela
        setAviso((atual) => ({ id: atual.id + 1, visivel: true }));
    }

    function fecharAviso() {
        setAviso((atual) => ({ ...atual, visivel: false }));
    }

    // Botão voltar/avançar do navegador: mostra a página da URL
    useEffect(() => {
        function aoMudarHistorico() {
            setPagina(paginaDaUrl());
            setEsporte((atual) => esporteDaPagina(paginaDaUrl(), atual));
            setAviso((atual) => ({ ...atual, visivel: false }));
        }

        window.addEventListener("popstate", aoMudarHistorico);
        return () => window.removeEventListener("popstate", aoMudarHistorico);
    }, []);

    function navegar(proximaPagina) {
        fecharAviso();
        if (proximaPagina !== pagina) {
            window.history.pushState(null, "", ROTAS[proximaPagina]);
        }
        setPagina(proximaPagina);
        setEsporte((atual) => esporteDaPagina(proximaPagina, atual));
    }

    // Clique na NavBar: abre a página do esporte (Todos e Futebol vão para a Home)
    function selecionarEsporte(id) {
        const destino = PAGINA_DO_ESPORTE[id];
        if (!destino) return;
        setEsporte(id);
        navegar(destino);
    }

    function aoLogar(email) {
        const usuario = { email };
        setUsuarioLogado(usuario);
        salvarUsuario(usuario);
        navegar("home");
    }

    function aoSair() {
        setUsuarioLogado(null);
        salvarUsuario(null);
        navegar("home");
    }

    return (
        <>
            <Suspense fallback={<Carregando />}>
                {pagina === "home" && (
                    <Home
                        usuario={usuarioLogado}
                        aoNavegar={navegar}
                        aoSair={aoSair}
                        esporte={esporte}
                        aoSelecionarEsporte={selecionarEsporte}
                    />
                )}

                {pagina === "estatisticas" && (
                    <Estatisticas
                        usuario={usuarioLogado}
                        aoNavegar={navegar}
                        aoSair={aoSair}
                        aoExigirLogin={exigirLogin}
                        esporte={esporte}
                        aoSelecionarEsporte={selecionarEsporte}
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
            </Suspense>

            {aviso.visivel && <AvisoLogin key={aviso.id} aoFechar={fecharAviso} />}
        </>
    );
}