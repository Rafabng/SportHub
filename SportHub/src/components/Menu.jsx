import { useState } from "react";
import "./Menu.css";
import { ITENS_PADRAO } from "../data/menuItens";

const ICONES = {
  home: "M3 11l9-8 9 8M5 10v10h14V10",
  ball: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8l3.5 2.5-1.3 4H9.8l-1.3-4z",
  table: "M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM3 10h18M9 4v16",
  chart: "M4 20V10M10 20V4M16 20v-7M2 20h20",
  trophy: "M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v1a3 3 0 0 0 4 3M16 6h4v1a3 3 0 0 1-4 3M12 13v4M8 20h8",
  news: "M4 5h13v14H6a2 2 0 0 1-2-2zM17 9h3v8a2 2 0 0 1-2 2M8 9h5M8 13h5",
  swap: "M7 7h13l-3-3M17 17H4l3 3",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z",
};

function Icone({ nome }) {
  return (
    <svg className="menu__icone" viewBox="0 0 24 24" aria-hidden="true">
      <path d={ICONES[nome]} />
    </svg>
  );
}

export default function Menu({
  itens = ITENS_PADRAO,
  ativo,
  aoSelecionar,
  badges = {},
  seguindo = [],
}) {
  const [interno, setInterno] = useState(itens[0]?.id);
  const [recolhido, setRecolhido] = useState(false);
  const atual = ativo ?? interno;

  const selecionar = (id) => {
    setInterno(id);
    aoSelecionar?.(id);
  };

  return (
    <aside className={`menu${recolhido ? " menu--mini" : ""}`}>
      <nav className="menu__lista" aria-label="Menu principal">
        {itens.map((item) => (
          <div key={item.id} className="menu__bloco">
            {item.grupo && <p className="menu__grupo">{item.grupo}</p>}
            <button
              type="button"
              title={item.rotulo}
              className={
                "menu__item" +
                (item.id === atual ? " menu__item--ativo" : "") +
                (item.mobile === false ? " menu__item--so-desktop" : "")
              }
              aria-current={item.id === atual ? "page" : undefined}
              onClick={() => selecionar(item.id)}
            >
              <Icone nome={item.icone} />
              <span className="menu__rotulo">{item.rotulo}</span>
              {badges[item.id] > 0 && <span className="menu__badge">{badges[item.id]}</span>}
            </button>
          </div>
        ))}
      </nav>

      {seguindo.length > 0 && (
        <div className="menu__seguindo-bloco">
          <p className="menu__grupo">Seguindo</p>
          <div className="menu__seguindo">
            {seguindo.map((t) =>
              t.escudo ? (
                <img key={t.nome ?? t.sigla} className="menu__escudo" src={t.escudo} alt={t.nome ?? t.sigla} />
              ) : (
                <span key={t.sigla} className="menu__escudo" style={{ "--cor": t.cor }}>
                  {t.sigla}
                </span>
              )
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        className="menu__recolher"
        aria-label={recolhido ? "Expandir menu" : "Recolher menu"}
        onClick={() => setRecolhido((v) => !v)}
      >
        <svg className="menu__seta" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" />
        </svg>
        <span className="menu__rotulo">Recolher</span>
      </button>
    </aside>
  );
}
