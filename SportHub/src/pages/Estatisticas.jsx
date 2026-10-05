import Aba from "../pages/Aba";
import MatchHeader from "../pages/MatchHeader";
import MatchTabs from "../pages/MatchTabs";
import StatRow from "../pages/StatRow";
import MatchEvents from "../pages/MatchEvents";

export default function Estatisticas({aoNavegar}) {

    return (
        <>
            <Aba 
                aoNavegar={aoNavegar}
                paginaAtual="estatisticas"
            />

            <main className="main-content">
                <MatchHeader />
                <MatchTabs />

                <section className="statistics">
                    <h2>Estatísticas</h2>

                    <StatRow 
                        nome="Posse de bola"
                        casa="55"
                        visitante="45"
                    />
                    <StatRow 
                        nome="Finalizações no alvo"
                        casa="6"
                        visitante="3"
                    />
                    <StatRow 
                        nome="Escanteios"
                        casa="7"
                        visitante="4"
                    />
                    <StatRow 
                        nome="Faltas"
                        casa="10"
                        visitante="14"
                    />
                    <StatRow 
                        nome="Cartões amarelos"
                        casa="2"
                        visitante="3"
                    />
                </section>
                <MatchEvents />
            </main>
        </>
    );
}