import NavBar from "../components/NavBar.jsx";
import Header from "../components/Header.jsx";
import GameCardBig from "../components/GameCardBig.jsx";
import jogos from "../data/jogos.js";
import "./Home.css";
import GameCardSmall from "../components/GameCardSmall.jsx";


export default function Home({ usuario, aoNavegar }) {

    return (
        <>
            <Header 
                usuario={usuario}
                aoNavegar={aoNavegar}
            />
            <NavBar />

            <div className="titulo-ao-vivo">
                <h2>
                    <span className="indicador-ao-vivo"></span>
                    Jogos ao Vivo -
                    <span>4</span>
                </h2>

                <a href="/jogos-ao-vivo">Ver todos →</a>
            </div>

            <GameCardBig 
                jogo={jogos[0]}
                aoNavegar={aoNavegar}
            />
            <div className="games-grid">
                <GameCardSmall 
                    jogo={jogos[1]}
                    aoNavegar={aoNavegar}
                />
                <GameCardSmall 
                    jogo={jogos[2]}
                    aoNavegar={aoNavegar}
                />
                <GameCardSmall 
                    jogo={jogos[2]}
                    aoNavegar={aoNavegar}
                />
                <GameCardSmall 
                    jogo={jogos[1]}
                    aoNavegar={aoNavegar}
                />
            </div>
        </>
    );
}