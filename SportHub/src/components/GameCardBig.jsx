import "./GameCardBig.css";

function getClasseIndicador(situacao) {
  if (situacao === "Ao Vivo") {
    return "indicador-ao-vivo";
  } else {
    return "indicador-finalizado";
  }
}


export default function GameCardBig({ jogo, aoNavegar }){
    return(
        <div className="game-card-principal">

            <div className="game-card-head">
                <a>{jogo.campeonato}</a>
                <div>
                    <span className={getClasseIndicador(jogo.situacao)} />
                    <span>{jogo.situacao}</span>
                </div>
            </div>

            <div className="game-card-mid">

                <div className="team team-home">
                    <img src={jogo.timeCasa.logo} alt={jogo.timeCasa.nome} />
                    <span>{jogo.timeCasa.nome}</span>
                </div>

                <div className="game-score">
                    <div>
                        <span>{jogo.placarCasa}</span>
                        <span>:</span>
                        <span>{jogo.placarVisitante}</span>
                    </div>

                    <small>{jogo.minuto}</small>
                </div>

                <div className="team team-away">
                    <img src={jogo.timeVisitante.logo} alt={jogo.timeVisitante.nome} />
                    <span>{jogo.timeVisitante.nome}</span>
                </div>

            </div>

            <div className="game-card-footer">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        aoNavegar("estatisticas");
                    }}
                >
                    Clique para ver detalhes →
                </a>
            </div>

        </div>
    );
}