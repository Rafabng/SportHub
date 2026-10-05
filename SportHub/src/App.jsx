import { useState } from 'react';
import './App.css';
import Login from './pages/Login.jsx';

import Estatisticas from './pages/Estatisticas.jsx';
import Home from './pages/Home.jsx';

export default function App() {

  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [pagina, setPagina] = useState("home");

  if (!usuarioLogado) {
    return (
      <Login aoLogar={(email) => setUsuarioLogado(email)} />
    );
  }

  return (
    <>
      {pagina == "home" && (<Home aoNavegar={setPagina}/>)}
      {pagina == "estatisticas" && (<Estatisticas aoNavegar={setPagina}/>)}
    </>
  );
}
