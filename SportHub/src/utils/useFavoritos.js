import { useApp } from "../context/useApp.jsx";

/**
 * Favoritos de times, usando a MESMA lista do AppContext
 * (localStorage "sporthub_times_favoritos"), a mesma que o botão de estrela
 * do MatchHeader grava. Assim o "Seguindo" da Home e o MatchHeader sempre batem.
 *
 * Sem usuário logado, "favoritos" vem vazio (o "Seguindo" some do menu).
 */
export default function useFavoritos(usuario) {
  const { timesFavoritos, ehTimeFavorito, alternarTimeFavorito } = useApp();

  return {
    favoritos: usuario ? timesFavoritos : [],
    ehFavorito: (id) => Boolean(usuario) && ehTimeFavorito(id),
    alternarFavorito: alternarTimeFavorito,
  };
}
