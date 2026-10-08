import time from "../data/times";
import jogo from "../data/jogos";
import "./GameCard.css";

function GameCardBig(){
    return(
        <div className="game-card-principal">

            <div className="game-card-head">
                <span>{jogo[0].campeonato}</span>
                <span>{jogo[0].situacao}</span>
            </div>

            <div className="game-card-mid">

                <div className="team team-home">
                    <img src={jogo[0].timeCasa.logo} alt={jogo[0].timeCasa.nome} />
                    <span>{jogo[0].timeCasa.nome}</span>
                </div>

                <div className="game-score">
                    <div>
                        <span>{jogo[0].placarCasa}</span>
                        <span>:</span>
                        <span>{jogo[0].placarVisitante}</span>
                    </div>

                    <small>{jogo[0].minuto}</small>
                </div>

                <div className="team team-away">
                    <img src={jogo[0].timeVisitante.logo} alt={jogo[0].timeVisitante.nome} />
                    <span>{jogo[0].timeVisitante.nome}</span>
                </div>

            </div>

            <div className="game-card-footer">
                <span>Clique para ver detalhes</span>
                <span>Ver partidas →</span>
            </div>

        </div>
    );
}

export default GameCardBig;