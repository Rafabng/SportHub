export default function StatRow({nome, casa, visitante}) {

    const valorCasa = parseInt(casa);
    const valorVisitante = parseInt(visitante);

    const total = valorCasa + valorVisitante;

    const porcentagemCasa = (valorCasa / total) * 100;
    const porcentagemVisitante = (valorVisitante / total) * 100;

    return (
        <div className="stat-row">

            <div className="stat-values">
                <strong>{casa}</strong>
                <span>{nome}</span>
                <strong>{visitante}</strong>
            </div>
            <div className="stat-bars">

                <div className="bar-container casa">
                    <div className="bar">{{width: `${porcentagemCasa}%`}}</div>
                </div>
                <div className="bar-container visitante">
                    <div className="bar">{{width: `${porcentagemVisitante}%`}}</div>
                </div>

            </div>


        </div>
    );

}