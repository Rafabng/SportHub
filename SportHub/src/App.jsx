import { useState } from 'react';
import './App.css';
import Login from './pages/Login.jsx';

export default function App() {

  const [usuarioLogado, setUsuarioLogado] = useState(null);

  if (!usuarioLogado) {
    return (
      <Login aoLogar={(email) => setUsuarioLogado(email)} />
    );
  }

  return (
    <div>
      <h1>Bem-vindo ao SportHub!!</h1>
      <p>Usuário logado: {usuarioLogado}</p>
    </div>
  );
}
