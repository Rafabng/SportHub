
export default function MatchHeader() {

    return (
        <section className="">

            <p>Campeonato Brasileiro</p>
            <p>FINALIZADO</p>

            <div className="teams">
                <div className="team">
                    <div className="team-logo">🔴</div>
                    <h2>Flamengo</h2>
                </div>

                <div className="score">
                    <strong>2</strong>
                    <span>x</span>
                    <strong>1</strong>
                </div>

                <div className="team">
                    <div className="team-logo">🟢</div>
                    <h2>Palmeiras</h2>
                </div>
            </div>

            <p>Maracanã • 02/10/2026 • 20:00</p>

        </section>
    );

}