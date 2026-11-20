import { useCallback, useEffect, useRef, useState } from "react";
import GameCard from "./GameCard.jsx";
import "./Carrossel.css";

/**
 * Props:
 *  - titulo       nome do campeonato
 *  - logo         (opcional) logo do campeonato, mostrada à esquerda do nome
 *  - jogos        lista de jogos (itens de data/jogos.js) desse campeonato
 *  - aoNavegar    repassada para cada <GameCard />
 *  - aoVerTabela  (opcional) mostra o link "Ver tabela"
 */
export default function Carrossel({ titulo, logo, jogos = [], aoNavegar, aoVerTabela }) {
  const trilho = useRef(null);
  const [podeVoltar, setPodeVoltar] = useState(false);
  const [podeAvancar, setPodeAvancar] = useState(false);

  const atualizar = useCallback(() => {
    const el = trilho.current;
    if (!el) return;
    setPodeVoltar(el.scrollLeft > 0);
    setPodeAvancar(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  // O ResizeObserver avisa quando o trilho ou os cards mudam de tamanho
  // (inclusive na primeira renderização), então as setas ficam sempre corretas.
  useEffect(() => {
    const el = trilho.current;
    if (!el) return;
    const observador = new ResizeObserver(atualizar);
    observador.observe(el);
    Array.from(el.children).forEach((filho) => observador.observe(filho));
    return () => observador.disconnect();
  }, [atualizar, jogos]);

  const rolar = (direcao) => {
    const el = trilho.current;
    el?.scrollBy({ left: direcao * el.clientWidth * 0.8, behavior: "smooth" });
  };

  if (jogos.length === 0) return null;

  return (
    <section className="carrossel">
      <header className="carrossel__cabecalho">
        <h3 className="carrossel__titulo">
          {logo && <img className="carrossel__logo" src={logo} alt="" />}
          {titulo}
        </h3>
        <div className="carrossel__acoes">
          {aoVerTabela && (
            <button type="button" className="carrossel__link" onClick={aoVerTabela}>
              Ver tabela
            </button>
          )}
          <button type="button" className="carrossel__seta" aria-label="Anterior" disabled={!podeVoltar} onClick={() => rolar(-1)}>
            ‹
          </button>
          <button type="button" className="carrossel__seta" aria-label="Próximo" disabled={!podeAvancar} onClick={() => rolar(1)}>
            ›
          </button>
        </div>
      </header>

      <div className="carrossel__trilho" ref={trilho} onScroll={atualizar}>
        {jogos.map((jogo) => (
          <GameCard
            key={jogo.id}
            jogo={jogo}
            aoNavegar={aoNavegar}
          />
        ))}
      </div>
    </section>
  );
}
