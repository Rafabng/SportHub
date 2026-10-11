import "./MatchTabs.css";

/* Abas e setas para navegação entre as opções de estatística */
export default function MatchTabs({ abas, abaAtiva, aoSelecionar }) {

    /** Função para passar de aba com as teclas */
    function aoTeclar(evento) {
        
        const teclas = ["ArrowLeft", "ArrowRight", "Home", "End"];
        
        if (!teclas.includes(evento.key)) return;

        evento.preventDefault();

        const itens = Array.from(evento.currentTarget.querySelectorAll('[role="tab"]'));
        const indiceAtual = itens.findIndex((item) => item.getAttribute("aria-selected") == "true");

        /** Verifica qual seta foi selecionada */
        let indice = indiceAtual;
        if (evento.key === "ArrowRight") indice = (indiceAtual + 1) % itens.length;
        if (evento.key === "ArrowLeft") indice = (indiceAtual - 1 + itens.length) % itens.length;
        if (evento.key === "Home") indice = 0;
        if (evento.key === "End") indice = itens.length - 1;

        /** Ajusta o foco para a ABA e envia seu id */
        itens[indice].focus();
        aoSelecionar(abas[indice].id);
    }

    return (
        <div
            className="match-tabs"
            role="tablist"
            aria-label="Seções da partida"
            onKeyDown={aoTeclar}
        >
            {abas.map((aba) => {
                const ativa = aba.id === abaAtiva;

                return (
                    <button
                        key={aba.id}
                        type="button"
                        role="tab"
                        id={`aba-${aba.id}`}
                        className="match-tab"
                        aria-selected={ativa}
                        aria-controls="painel-partida"
                        tabIndex={ativa ? 0 : -1}
                        onClick={() => aoSelecionar(aba.id)}
                    >
                        {aba.rotulo}    
                    </button>
                );                
            })}
        </div>
    );
} 