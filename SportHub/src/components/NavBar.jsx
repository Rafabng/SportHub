import "./NavBar.css";

const ESPORTES = [
    { id: "todos", rotulo: "☰ Todos" },
    { id: "futebol", rotulo: "⚽ Futebol" },
    { id: "basquete", rotulo: "🏀 Basquete" },
    { id: "tenis", rotulo: "🎾 Tênis" },
    { id: "formula1", rotulo: "🏎️ Fórmula 1" },
    { id: "e-sports", rotulo: "🎮 E-sports" },
    { id: "volei", rotulo: "🏐 Vôlei" },
    { id: "futebol-americano", rotulo: "🏈 Futebol Americano" },
    { id: "futsal", rotulo: "⚽ Futsal" },
    { id: "ufc", rotulo: "🥊 UFC" },
    { id: "futebol-de-areia", rotulo: "⚽ Futebol de Areia" },
];

/**
 * Props (vêm do App.jsx):
 *  - ativo         id do esporte selecionado ("todos", "futebol", "basquete"...)
 *  - aoSelecionar  chamada com o id do esporte clicado; o App decide para qual página ir
 *
 * Botões (e não <a href>): clicar não recarrega a página, então o usuário continua logado.
 */
function NavBar({ ativo = "todos", aoSelecionar }) {

    return (
        <nav className="navbar" aria-label="Esportes">
            {ESPORTES.map((esporte) => (
                <button
                    key={esporte.id}
                    type="button"
                    className={ativo === esporte.id ? "active" : ""}
                    aria-current={ativo === esporte.id ? "true" : undefined}
                    onClick={() => aoSelecionar?.(esporte.id)}
                >
                    {esporte.rotulo}
                </button>
            ))}
        </nav>
    );
}

export default NavBar;
