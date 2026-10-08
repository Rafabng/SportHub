export default function StatRow({nome, casa = 0, visitante = 0}) {

    const valorCasa = parseInt(casa) || 0;
    const valorVisitante = parseInt(visitante) || 0;

    const total = valorCasa + valorVisitante;

    const porcentagemCasa = total > 0 ? (valorCasa / total) * 100 : 50;
    const porcentagemVisitante = total > 0 ? (valorVisitante / total) * 100 : 50;

    return (
        <div className="stat-row">

            <div className="stat-values">
                <strong>{casa}</strong>
                <span>{nome}</span>
                <strong>{visitante}</strong>
            </div>
            <div className="stat-bars">

                <div className="bar-container casa">
                    <div className="bar" style={{ width: `${porcentagemCasa}%` }}></div>
                </div>
                <div className="bar-container visitante">
                    <div className="bar" style={{width: `${porcentagemVisitante}%` }}></div>
                </div>

            </div>
        </div>
    );

}