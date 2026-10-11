/** Linha de comparação entre os dois times */
export default function StatRow({nome, casa = 0, visitante = 0, nomeCasa, nomeVisitante, unidade = "", destaque = false}) {

    const valorCasa = Number(casa) || 0;
    const valorVisitante = Number(visitante) || 0;

    const total = valorCasa + valorVisitante;
    const maior = Math.max(valorCasa, valorVisitante);

    const divisaoCasa = total > 0 ? (valorCasa / total) * 100 : 50;
    const larguraCasa = maior > 0 ? (valorCasa / maior) * 100 : 0;
    const larguraVisitante = maior > 0 ? (valorVisitante / maior) * 100 : 0;

    return (
        <li className={destaque ? "stat stat--destaque" : "stat"}>
            
            <span className="sr-only">
                {nome}: {nomeCasa} {valorCasa}{unidade}, {nomeVisitante} {valorVisitante}{unidade}
            </span>

            <div className="stat__linha" aria-hidden="true">
                <strong className="stat__valor">{valorCasa}{unidade}</strong>
                <span className="stat__nome">{nome}</span>
                <strong className="stat__valor stat__valor--visitante">{valorVisitante}{unidade}</strong>                
            </div>

            {destaque ? (
                <div className="stat__divisao" aria-hidden="true">
                    <span 
                        className="stat__preenchimento stat__preenchimento--casa"
                        style={{ flexBasis: `${divisaoCasa}%` }}
                    />
                    <span 
                        className="stat__preenchimento stat__preenchimento--visitante"
                        style={{ flexBasis: `${100 - divisaoCasa}%` }}
                    />
                </div>
            ) : (
                <div className="stat__barras" aria-hidden="true">
                    <span className="stat__trilho stat__trilho--casa">
                        <span 
                            className="stat__preenchimento stat__preenchimento--casa"
                            style={{ width: `${larguraCasa}%` }}
                        />
                    </span>
                    <span className="stat__trilho">
                        <span 
                            className="stat__preenchimento stat__preenchimento--visitante"
                            style={{ width: `${larguraVisitante}%` }}
                        />
                    </span>
                </div>
            )}
        </li>
    );      
}