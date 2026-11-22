import { createContext } from "react";

// O contexto fica num arquivo próprio (sem componentes) para o AppProvider
// e o useApp poderem importá-lo sem quebrar o Fast Refresh do Vite.
export const AppContext = createContext(null);
