import { useState } from 'react';
import './App.css';

import Login from "./pages/Login.jsx";
import Estatisticas from "./pages/Estatisticas.jsx";
import Home from "./pages/Home.jsx";

export default function App() {

  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [pagina, setPagina] = useState("home");

  function aoLogar(email) {
      setUsuarioLogado({ email });
      setPagina("home");
  }

  return (
    <>
      {pagina === "home" && (
          <Home
              usuario={usuarioLogado}
              aoNavegar={setPagina}
          />
      )}

      {pagina === "estatisticas" && (
          <Estatisticas
              usuario={usuarioLogado}
              aoNavegar={setPagina}
          />
      )}

      {pagina === "login" && (
          <Login aoLogar={aoLogar} />
      )}
    </>
  );
}