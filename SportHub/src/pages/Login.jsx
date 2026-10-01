import { useState } from 'react';

export default function Login({ aoLogar }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        /* Garante que os dois estejam informados */
        if (email && senha) {
            aoLogar(email);
        }
    };

    return (
        <main className="login-container">

            <section className="login-card">
                
                <header className="login-header">
                    <h1>SportHub</h1>

                    <h2>Entre na sua conta</h2>
                    <p>Acompanhe seu time do coração, jogos e competições favoritas em um só lugar.</p>
                </header>

                <form onSubmit={handleSubmit} className="login-form">

                    <div className="input-group">
                        <label htmlFor="email">E-mail:</label>

                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="senha">Senha:</label>

                        <input
                            type={mostrarSenha ? "text" : "password"}
                            id="senha"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                        <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>{mostrarSenha ? "Ocultar" : "Mostrar"}</button>
                    </div>

                    <button type="submit" className="login-button">Entrar</button>

                </form>
            </section>
        </main>
    );
}
