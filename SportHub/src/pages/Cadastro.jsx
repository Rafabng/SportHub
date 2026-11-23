import { useState } from 'react';
import logo from "../assets/logo-sportshub.png";

import './Login.css';
import './Cadastro.css';

export default function Cadastro({ aoLogar, aoNavegar }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [erro, setErro] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (senha !== confirmarSenha) {
            setErro('As senhas não coincidem.');
            return;
        }

        if (nome && email && senha) {
            aoLogar(email);
        }
    };

    return (
        <main className="cadastro-container">
            <div className="cadastro-card">

                <div className="cadastro-header">
                    <img src={logo} alt="SportHub" className="logo-png-login" />
                    <h2>Crie sua conta</h2>
                    <p>Cadastre-se para acompanhar seu time do coração, placares e campeonatos.</p>
                </div>

                <div className="cadastro-form-container">

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="nome">Nome completo</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Digite seu nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">E-mail</label>
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
                            <label htmlFor="senha">Senha</label>
                            <div className="password-input-wrapper">
                                <input
                                    type={mostrarSenha ? "text" : "password"}
                                    id="senha"
                                    placeholder="Crie uma senha"
                                    value={senha}
                                    onChange={(e) => {
                                        setSenha(e.target.value);
                                        setErro('');
                                    }}
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

                        <div className="input-group">
                            <label htmlFor="confirmarSenha">Confirmar senha</label>
                            <input
                                type={mostrarSenha ? "text" : "password"}
                                id="confirmarSenha"
                                placeholder="Repita sua senha"
                                value={confirmarSenha}
                                onChange={(e) => {
                                    setConfirmarSenha(e.target.value);
                                    setErro('');
                                }}
                                required
                            />
                        </div>

                        {erro && (
                            <p className="erro-aviso">{erro}</p>
                        )}

                        <button type="submit" className="btn-cadastrar">Cadastrar</button>
                    </form>

                    <div className="cadastro-footer">
                        <span>Já tem uma conta?</span>
                        <button
                            type="button"
                            className="link-login"
                            onClick={() => aoNavegar('login')}
                        >
                            Entrar
                        </button>
                    </div>

                </div>

            </div>
        </main>
    );
}