import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <main className="login-container">
            <div className="login-card">

                {/* Cabeçalho Escuro */}
                <div className="login-header">
                    <h1>SportHub</h1>
                    <h2>Entre na<br/>sua conta</h2>
                    <p>Acompanhe seu time do coração, jogos e competições favoritas em um só lugar.</p>
                </div>

                {/* Área do Formulário Clara (Foco na Visibilidade) */}
                <div className="login-form-container">
                    <form>
                        <div className="input-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" placeholder="Digite seu e-mail" required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="senha">Senha</label>
                            <div className="password-input-wrapper">
                                <input type="password" id="senha" placeholder="Digite sua senha" required />
                                <button type="button" className="show-password">Mostrar</button>
                            </div>
                        </div>

                        <button type="submit" className="btn-entrar">Entrar</button>
                    </form>
                </div>

            </div>
        </main>
    );
};

export default Login;