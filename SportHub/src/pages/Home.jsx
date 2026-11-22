import { useState } from "react";
import Header from "../components/Header.jsx";
import NavBar from "../components/NavBar.jsx";
import Menu from "../components/Menu.jsx";
import Carrossel from "../components/Carrossel.jsx";
import jogos from "../data/jogos.js";
import times from "../data/times.js";
import { agruparPorCampeonato, statusDoJogo } from "../utils/jogo.js";
import "./Home.css";

const FILTROS = [
    { id: "todos", rotulo: "Todos" },
    { id: "aovivo", rotulo: "Ao vivo" },
    { id: "agendado", rotulo: "Próximos" },
    { id: "finalizado", rotulo: "Finalizados" },
];

// Itens do menu que já têm página no App.jsx (os outros ainda não existem)
const PAGINAS_DO_MENU = {
    inicio: "home",
};

export default function Home({ usuario, aoNavegar }) {
    const [filtro, setFiltro] = useState("todos");

    const jogosVisiveis = filtro === "todos"
        ? jogos
        : jogos.filter((jogo) => statusDoJogo(jogo) === filtro);

    const grupos = agruparPorCampeonato(jogosVisiveis);
    const totalAoVivo = jogos.filter((jogo) => statusDoJogo(jogo) === "aovivo").length;

    // "Seguindo" só aparece com usuário logado (por enquanto usa os times de times.js)
    const seguindo = usuario ? times.map((time) => ({ nome: time.nome, escudo: time.logo })) : [];

    function aoSelecionarMenu(id) {
        const pagina = PAGINAS_DO_MENU[id];
        if (pagina) aoNavegar(pagina);
    }

    return (
        <>
            <Header usuario={usuario} aoNavegar={aoNavegar} />
            <NavBar />

            <div className="home__layout">
                <Menu
                    ativo="inicio"
                    badges={{ partidas: totalAoVivo }}
                    seguindo={seguindo}
                    aoSelecionar={aoSelecionarMenu}
                />

                <main className="home__conteudo">
                    <div className="home__filtros">
                        {FILTROS.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                className="home__filtro"
                                aria-pressed={filtro === item.id}
                                onClick={() => setFiltro(item.id)}
                            >
                                {item.rotulo}
                            </button>
                        ))}
                    </div>

                    {grupos.length === 0 && (
                        <p className="home__vazio">Nenhum jogo nesta categoria agora. Tente outro filtro.</p>
                    )}

                    {grupos.map((grupo) => (
                        <Carrossel
                            key={grupo.campeonato.id}
                            titulo={grupo.campeonato.nome}
                            logo={grupo.campeonato.logo}
                            jogos={grupo.jogos}
                            aoNavegar={aoNavegar}
                        />
                    ))}
                </main>
            </div>
        </>
    );
}
