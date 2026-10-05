export default function MatchEvents() {

    return (
        <section className="match-events">

            <h2>Eventos da partida</h2>

            <div className="event">
                <span className="event-time">15'</span>
                <span className="event-icon">⚽</span>

                <div>
                    <strong>Gol - Flamento</strong>
                    <p>Pedro</p>
                </div>
            </div>
            <div className="event">
                <span className="event-time">37'</span>
                <span className="event-icon">🟨</span>

                <div>
                    <strong>Cartão amarelo - Palmeiras</strong>
                    <p>Jogador</p>
                </div>
                <div>
                    <strong>Gol - Flamengo</strong>
                    <p>Arrascaeta</p>
                </div>
            </div>
            <div className="event">
                <span className="event-time">81'</span>
                <span className="event-icon">🟨</span>

                <div>
                    <strong>Cartão amarelo - Palmeiras</strong>
                    <p>Jogador</p>
                </div>
            </div>

        </section>
    );    
}