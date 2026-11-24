import { statusDoJogo } from "../utils/jogo.js";
import "./GameCard.css";

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
          <img className="game-card__escudo" src={jogo.timeCasa.logo} alt="" />
          {jogo.timeCasa.nome}
        </span>
        <span className="game-card__placar">
          {placar}
          <small className={aoVivo ? "game-card__legenda--aovivo" : ""}>{legenda}</small>
        </span>
        <span className="game-card__time">
          <img className="game-card__escudo" src={jogo.timeVisitante.logo} alt="" />
          {jogo.timeVisitante.nome}
        </span>
      </span>

      <span className="game-card__rodape">Ver detalhes →</span>
    </button>
  );
}
