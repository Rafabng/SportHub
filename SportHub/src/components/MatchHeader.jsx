import { useState } from "react";
import { ArrowLeft, Share2, Star, Trophy } from "lucide-react";
import TeamCrest from "./TeamCrest.jsx";
import "./MatchHeader.css";

function BolaIcone() {
    return (
        <svg 
            className="match-gol__bola"
            viewBox="0 0 16 16"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
            focusable="false"
        >   
            <circle cx="8" cy="8" r="6.8" />
            <path d="m8 5 2.6 1.9-1 3H6.4l-1-3L8 5Z" fill="currentColor" />
            <path d="M8 5V1.4M10.6 6.9l3.3-1.1M9.6 9.9l2 2.8M6.4 9.9l-2 2.8M5.4 6.9 2.1 5.8" />
        </svg>
    );
}

function ListaGols({ gols, lado }) {
    if (gols.length === 0) return null;

    return (
        <ul className={`match-gols match-gols--${lado}`}>
            {gols.map((gol) => (
                <li key={`${gol.jogador}-${gol.minuto}`} className="match-gol">
                    {lado === "visitante" && <BolaIcone />}
                    <span>
                        <span className="sr-only">Gol de </span>
                        {gol.jogador}
                    </span>
                    <span className="match-gol__minuto">{gol.minuto}</span>
                    {lado == "casa" && <BolaIcone />}
                </li>
            ))}
        </ul>
    );
}

function Time({ time, lado, favorito, aoFavoritar }) {
    const estrela = (
        <button
            type="button"
            className="match-icone-btn"
            aria-pressed={favorito}
            aria-label={`Favoritar ${time.nome}`}
            onClick={aoFavoritar} 
        >
            <Star size={16} fill={favorito ? "currentColor" : "none"} />
        </button>
    );

    return (
        <div className="match-time">
            <div className="match-time__escudo">
                {lado === "casa" ? (
                    <>
                        {estrela}
                        <TeamCrest time={time} />
                    </>
                ) : (
                    <>
                        <TeamCrest time={time} />
                        {estrela}
                    </>
                )}
            </div>
            <p className="match-time__nome">{time.nome}</p>
        </div>
    );
}

function formatarDataHora(iso) {
    const data = new Date(iso);
    const opcoes = { timeZone: "America/Sao_Paulo" };
    const dia = data.toLocaleDateString("pt-BR", { ...opcoes, day: "2-digit", month: "2-digit" });
    const hora= data.toLocaleTimeString("pt-BR", {...opcoes, hour: "2-digit", minute: "2-digit"});
    return `${dia} · ${hora}`;
}

export default function MatchHeader({ partida, aoVoltar }) {
    const { competicao, casa, visitante, placar, gols, status, dataHora } = partida;
    
    const [favoritos, setFavoritos] = useState({ partida: false, casa: false, visitante: false });
    const [linkCopiado, setLinkCopiado] = useState(false);

    function alternarFavorito(chave) {
        setFavoritos((atual) => ({ ...atual, [chave]: !atual[chave] }));
    }

    async function compartilhar() {
        const dados = {
            title: `${casa.nome} ${placar.casa} x ${placar.visitante} ${visitante.nome}`,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(dados);
            } else {
                await navigator.clipboard.writeText(dados.url);
                setLinkCopiado(true);
                setTimeout(() => setLinkCopiado(false), 2000);
            }
        } catch {}
    }

    return (
        <header className="match-hero">
            <button type="button" className="match-voltar" onClick={aoVoltar}>
                <ArrowLeft size={16} />
                Voltar para os jogos
            </button>

            <div className="match-competicao">
                <p className="match-competicao__nome">
                    <span className="match-competicao__icone" aria-hidden="true">
                        <Trophy size={13} />
                    </span>
                    {competicao.nome}
                    <span className="match-competicao__rodada">{competicao.rodada}</span>
                </p>

                <div className="match-acoes">
                    <button
                        type="button"
                        className="match-acao"
                        aria-pressed={favoritos.partida}
                        onClick={() => alternarFavorito("partida")}
                    >
                        <Star size={16} fill={favoritos.partida ? "currentColor" : "none"} />
                        Favoritar
                    </button>

                    <button type="button" className="match-acao" onClick={compartilhar}>
                        <Share2 size={16}/>
                        <span aria-live="polite">{linkCopiado ? "Link copiado" : "Compartilhar"}</span>
                    </button>
                </div>
            </div>
        
            <h1 className="sr-only">
                {casa.nome} {placar.casa} x {placar.visitante} {visitante.nome}
            </h1>

            <div className="match-placar">
                <div className="match-lado match-lado--casa">
                    <Time 
                        time={casa}
                        lado="casa"
                        favorito={favoritos.casa}
                        aoFavoritar={() => alternarFavorito("casa")}
                    />
                    <span className="match-placar__gols">{placar.casa}</span>
                </div>

                <div className="match-status">
                    <p className="match-status__situacao">{status}</p>
                    <p className="match-status__data">
                        <time dateTime={dataHora}>{formatarDataHora(dataHora)}</time>
                    </p>
                </div>

                <div className="match-lado match-lado--visitante">
                    <span className="match-placar__gols">{placar.visitante}</span>

                    <Time 
                        time={visitante}
                        lado="visitante"
                        favorito={favoritos.visitante}
                        aoFavoritar={() => alternarFavorito("visitante")}
                    />
                </div>  

                <ListaGols gols={gols.casa} lado="casa" />
                <ListaGols gols={gols.visitante} lado="visitante" />
            </div>
        </header>
    );

}