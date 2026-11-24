import { useApp } from "../context/useApp.jsx";



export default function useFavoritos(usuario) {
  const { timesFavoritos, ehTimeFavorito, alternarTimeFavorito } = useApp();

  return {
    favoritos: usuario ? timesFavoritos : [],
    ehFavorito: (id) => Boolean(usuario) && ehTimeFavorito(id),
    alternarFavorito: alternarTimeFavorito,
  };
}
