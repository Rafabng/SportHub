import StatRow from "./StatRow.jsx";
import "./MatchStats.css";

export default function MatchStats({ partida }) {

    const { casa, visitante, estatisticas } = partida;

    return (
        <section className="match-card" aria-labelledby="titulo-estatisticas">
            <h2 id="titulo-estatisticas" className="match-card__titulo">Visão geral da partida</h2>

            <ul className="stat-lista">
                {estatisticas.map((estatistica) => (<StatRow
                                                        key={estatistica.id}
                                                        nome={estatistica.nome}
                                                        casa={estatistica.casa}
                                                        visitante={estatistica.visitante}
                                                        unidade={estatistica.unidade}
                                                        destaque={estatistica.destaque}
                                                        nomeCasa={casa.nome}
                                                        nomeVisitante={visitante.nome}
                                                    />
                ))}
            </ul>
        </section>
    );
}
