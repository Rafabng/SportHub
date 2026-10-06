import NavBar from "../components/NavBar.jsx";
import Header from "../components/Header.jsx";
import GameCardBig from "../components/GameCardBig.jsx";
import "./Home.css";

import Aba from "./Aba.jsx";


export default function Home({ aoNavegar }) {

    return (
        <>
            <Header />
            <NavBar />
            <GameCardBig />

            <Aba
                aoNavegar={aoNavegar}
                paginaAtual="home"
            />

            <main className="main-content">
                <h1>Bem-vindo ao SportHub!</h1>

                <button onClick={() => aoNavegar("estatisticas")}>
                    Ver estatísticas
                </button>
            </main>
        </>
    );
}