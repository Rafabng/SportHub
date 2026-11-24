
export function statusDoJogo(jogo) {
  if (jogo.situacao === "Ao Vivo") return "aovivo";
  if (jogo.situacao === "Finalizado") return "finalizado";
  return "agendado";
}

/* === Agrupa os gamecards para utilizar no carrossel ===*/
export function agruparPorCampeonato(jogos) {
  const grupos = new Map();
  jogos.forEach((jogo) => {
    const nome = jogo.campeonato.nome;
    if (!grupos.has(nome)) grupos.set(nome, { campeonato: jogo.campeonato, jogos: [] });
    grupos.get(nome).jogos.push(jogo);
  });
  return [...grupos.values()];
}