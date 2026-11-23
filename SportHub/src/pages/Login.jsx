import { useState } from 'react';
import logo from "../assets/logo-sportshub.png";

import './Login.css';

export default function Login({ aoLogar, aoNavegar }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mensagemRecuperacao, setMensagemRecuperacao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && senha) {
            aoLogar(email);
        }
    };

    const handleEsqueciSenha = () => {
        if (!email) {
            setMensagemRecuperacao('Digite seu e-mail acima para recuperar a senha.');
            return;
        }
        setMensagemRecuperacao(`Link de recuperação enviado para ${email}.`);
    };

    return (
        <main className="login-container">
            <div className="login-card">

                <div className="login-header">
                    <img src={logo} alt="SportHub" className='logo-png-login'/>
                    <h2>Entre na sua conta</h2>
                    <p>Acompanhe seu time do coração, jogos e competições favoritas em um só lugar.</p>
                </div>

                <div className="login-form-container">

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setMensagemRecuperacao('');
                                }}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <div className="label-row">
                                <label htmlFor="senha">Senha</label>
                                <button
                                    type="button"
                                    className="link-esqueci-senha"
                                    onClick={handleEsqueciSenha}
                                >
                                    Esqueci minha senha
                                </button>
                            </div>

                            <div className="password-input-wrapper">
                                <input
                                    type={mostrarSenha ? "text" : "password"}
                                    id="senha"
                                    placeholder="Digite sua senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required
                                />

                                <button
                                    type="button"
                                    className="show-password"
                                    onClick={() => setMostrarSenha(!mostrarSenha)}
                                >
                                    {mostrarSenha ? "Ocultar" : "Mostrar"}
                                </button>
                            </div>
                        </div>

                        {mensagemRecuperacao && (
                            <p className="recuperacao-aviso">{mensagemRecuperacao}</p>
                        )}

                        <button type="submit" className="btn-entrar">Entrar</button>
                    </form>

                    <div className="login-divider">
                        <span>ou continue com</span>
                    </div>

                    <div className="social-login-group">
                        <button
                            type="button"
                            className="btn-social btn-gmail"
                            onClick={() => aoLogar('usuario@gmail.com')}
                        >
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                            </svg>
                            Entrar com Gmail
                        </button>

                        <button
                            type="button"
                            className="btn-social btn-apple"
                            onClick={() => aoLogar('usuario@icloud.com')}
                        >
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                            </svg>
                            Entrar com Apple
                        </button>
                    </div>

                    <div className="login-footer">
                        <span>Não tem uma conta?</span>
                        <button
                            type="button"
                            className="link-cadastrar"
                            onClick={() => aoNavegar && aoNavegar('cadastro')}
                        >
                            Cadastre-se
                        </button>
                    </div>

                </div>

            </div>
        </main>
    );
}