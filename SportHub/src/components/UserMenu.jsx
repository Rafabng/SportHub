import { useEffect, useRef, useState } from "react";
import { Settings, LogOut } from "lucide-react";
import "./UserMenu.css";

function BandeiraBrasil() {
  return (
    <svg className="user-menu__bandeira" viewBox="0 0 28 20" aria-hidden="true">
      <rect width="28" height="20" rx="3" fill="#229E45" />
      <path d="M14 3.2 25 10 14 16.8 3 10z" fill="#F8E509" />
      <circle cx="14" cy="10" r="4.3" fill="#2B3F87" />
    </svg>
  );
}

export default function UserMenu({ usuario, aoSair, aoIdioma, aoConfiguracoes }) {
  const [aberto, setAberto] = useState(false);
  const raiz = useRef(null);
  const botao = useRef(null);

  const nome = usuario.nome ?? usuario.email;
  const inicial = nome.charAt(0).toUpperCase();

  useEffect(() => {
    if (!aberto) return;

    raiz.current?.querySelector('[role="menuitem"]')?.focus();

    function aoClicarFora(evento) {
      if (!raiz.current?.contains(evento.target)) setAberto(false);
    }
    function aoApertarTecla(evento) {
      if (evento.key === "Escape") {
        setAberto(false);
        botao.current?.focus();
      }
    }

    document.addEventListener("pointerdown", aoClicarFora);
    document.addEventListener("keydown", aoApertarTecla);
    return () => {
      document.removeEventListener("pointerdown", aoClicarFora);
      document.removeEventListener("keydown", aoApertarTecla);
    };
  }, [aberto]);

  function navegarPeloTeclado(evento) {
    if (evento.key !== "ArrowDown" && evento.key !== "ArrowUp") return;
    evento.preventDefault();
    const itens = [...raiz.current.querySelectorAll('[role="menuitem"]')];
    const atual = itens.indexOf(document.activeElement);
    const proximo = evento.key === "ArrowDown"
      ? (atual + 1) % itens.length
      : (atual - 1 + itens.length) % itens.length;
    itens[proximo].focus();
  }

  function escolher(acao) {
    setAberto(false);
    acao?.();
  }

  return (
    <div className="user-menu" ref={raiz}>
      <button
        ref={botao}
        type="button"
        className="user-button"
        aria-haspopup="menu"
        aria-expanded={aberto}
        aria-label="Menu do usuário"
        onClick={() => setAberto((valor) => !valor)}
      >
        <span className="user-avatar">{inicial}</span>
      </button>

      {aberto && (
        <div className="user-menu__painel" role="menu" onKeyDown={navegarPeloTeclado}>
          <div className="user-menu__perfil">
            <span className="user-avatar user-menu__avatar">{inicial}</span>
            <span className="user-menu__dados">
              <strong className="user-menu__nome">{nome}</strong>
              {usuario.nome && <span className="user-menu__email">{usuario.email}</span>}
            </span>
          </div>

          <button type="button" role="menuitem" className="user-menu__item" onClick={() => escolher(aoIdioma)}>
            <BandeiraBrasil />
            <span>Idioma</span>
            <span className="user-menu__valor">Português</span>
          </button>

          <button type="button" role="menuitem" className="user-menu__item" onClick={() => escolher(aoConfiguracoes)}>
            <Settings size={18} />
            <span>Configurações</span>
          </button>

          <div className="user-menu__separador" role="separator" />

          <button type="button" role="menuitem" className="user-menu__item user-menu__item--sair" onClick={() => escolher(aoSair)}>
            <LogOut size={18} />
            <span>Sair</span>
          </button>
        </div>
      )}
    </div>
  );
}
