import { useState } from 'react';
import logo from "../assets/logo-sportshub.png";

import './Login.css';

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

                        <button type="submit" className="btn-entrar">Entrar</button>
                    </form>
                </div>

            </div>
        </main>
    );
}