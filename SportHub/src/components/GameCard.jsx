import { statusDoJogo } from "../utils/jogo.js";
import "./GameCard.css";

function Escudo({ time }) {
  if (time.logo) {
    return <img className="game-card__escudo" src={time.logo} alt="" />;
  }
  return (
    <span className="game-card__escudo game-card__escudo--sigla">
      {time.nome.slice(0, 3).toUpperCase()}
    </span>
  );
}

/**
 * Props (mesmas do antigo GameCardSmall):
 *  - jogo        item de data/jogos.js
 *  - aoNavegar   função de navegação do App (vai para "estatisticas")
 */
export default function GameCard({ jogo, aoNavegar }) {
  const status = statusDoJogo(jogo);
  const aoVivo = status === "aovivo";
  const agendado = status === "agendado";

  const placar = agendado ? "vs" : `${jogo.placarCasa} : ${jogo.placarVisitante}`;
  const legenda = agendado ? jogo.horario : jogo.minuto;

  return (
    <button
      type="button"
      className={`game-card${aoVivo ? " game-card--aovivo" : ""}`}
      aria-label={`${jogo.timeCasa.nome} contra ${jogo.timeVisitante.nome}, ${jogo.situacao}`}
      onClick={() => aoNavegar("estatisticas")}
    >
      <span className="game-card__topo">
        <span>{jogo.campeonato.nome}</span>
        <span className={`game-card__status${aoVivo ? " game-card__status--aovivo" : ""}`}>
          {jogo.situacao}
        </span>
      </span>

      <span className="game-card__corpo">
        <span className="game-card__time">
          <Escudo time={jogo.timeCasa} />
          {jogo.timeCasa.nome}
        </span>
        <span className="game-card__placar">
          {placar}
          <small className={aoVivo ? "game-card__legenda--aovivo" : ""}>{legenda}</small>
        </span>
        <span className="game-card__time">
          <Escudo time={jogo.timeVisitante} />
          {jogo.timeVisitante.nome}
        </span>
      </span>

      <span className="game-card__rodape">Ver detalhes →</span>
    </button>
  );
}
