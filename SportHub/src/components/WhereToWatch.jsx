export default function WhereToWatch({ transmissoes }) {
    return (
        <section className="match-card" aria-labelledby="titulo-onde-assistir">
            <h2 id="titulo-onde-assistir" className="match-card__titulo">Onde Assistir</h2>

            <ul className="canal-lista">
                {transmissoes.map((canal) => (
                    <li key={canal.id} className="canal">
                        <span>
                            <span className="canal__nome">{canal.nome}</span>
                            <span className="canal__tipo"> • {canal.tipo}</span>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
} 