
import Aba from "./Aba.jsx";

export default function Home({ aoNavegar }) {

    return (
        <>
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