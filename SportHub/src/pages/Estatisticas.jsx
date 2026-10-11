import { useState } from "react";
import Header from "../components/Header.jsx";
import NavBar from "../components/NavBar.jsx";
import partidaExemplo from "../data/partida.js";
import MatchHeader from "../components/MatchHeader.jsx";
import MatchTabs from "../components/MatchTabs.jsx";
import MatchStats from "../components/MatchStats.jsx";
import WhereToWatch from "../components/WhereToWatch.jsx";
import MatchVenue from "../components/MatchVenue.jsx";
import "./Estatisticas.css";

const ABAS = [
    { id: "resumo", rotulo: "Resumo" },
    { id: "estatisticas", rotulo: "Estatísticas" },
    { id: "escalacoes", rotulo: "Escalações" },
    { id: "classificacao", rotulo: "Classificação" },
    { id: "comentarios", rotulo: "Comentários" },
    { id: "noticias", rotulo: "Notícias" },
];

export default function Estatisticas({ aoNavegar, partida = partidaExemplo }) {

    const [abaAtiva, setAbaAtiva] = useState("estatisticas");
    const aba = ABAS.find((item) => item.id === abaAtiva);

    const coresDosTimes = {
        "--cor-casa": partidaExemplo.casa.cor,
        "--cor-visitante": partidaExemplo.visitante.cor
    };

    return (
        <div className="match-page">
            <Header />
            <NavBar />

            <main className="match-main" style={coresDosTimes}>
                <MatchHeader 
                    partida={partida}
                    aoVoltar={() => aoNavegar("home")}
                />

                <MatchTabs 
                    abas={ABAS}
                    abaAtiva={abaAtiva}
                    aoSelecionar={setAbaAtiva}
                />

                <div className="match-layout">
                    <div 
                        id="painel-partida"
                        className="match-panel"
                        role="tabpanel"
                        aria-labelledby={`aba-${abaAtiva}`}
                        tabIndex={0}
                    >
                        {
                            abaAtiva === "estatisticas" ? (<MatchStats partida={partida}/>) : ( <section className="match-card--vazio">
                                                                                                    <h2 className="match-card__titulo">{aba.rotulo}</h2>
                                                                                                    <p>Esta seção ainda não está disponível para esta partida</p>
                                                                                                </section>)
                        }
                    </div>

                    <aside className="match-aside" aria-label="Informações da Partida">
                        <WhereToWatch transmissoes={partida.transmissoes}/>
                        <MatchVenue estadio={partida.estadio} />
                    </aside>
                </div>

            </main>

        </div>
    );

}