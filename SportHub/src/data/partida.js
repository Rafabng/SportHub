/* Dados de exemplo da tela de estatísticas */
import time from "./times.js";

const partida = {
    id: "rel-bar-2026-r23",
    competicao: {
        nome: "La Liga 2026",
        rodada: "Rodada 23"
    },
    status: "73:28",
    dataHora: "2026-09-02T21:30:00-03:00",

    // Logo (caso não houver, <TeamCrest> utiliza a sigla como escudo)
    casa: {
        nome: time[0].nome,
        sigla: "RM",
        cor: "#ffffff",
        logo: time[0].logo
    },
    visitante: {
        nome: time[1].nome,
        sigla: "BAR",
        cor: "#9e2f2f",
        logo: time[1].logo
    },
    placar: {
        casa: 2,
        visitante: 1
    },
    gols: {
        casa: [
            {
                jogador: "Vini JR.",
                minuto: 12
            },
            {
                jogador: "Valverde", 
                minuto: 73
            }
        ],
        visitante: [
            {
                jogador: "Gabriel Jesus",
                minuto: 64
            }
        ]
    },
    /* Estatísticas ('destaque: true' desenha a barra dividida, para posse de bola) */
    estatisticas: [
        {
            id: "posse",
            nome: "Posse de bola",
            casa: 58,
            visitante: 42,
            unidade: "%",
            destaque: true
        },
        {
            id: "golsEsperados",
            nome: "Gols Esperados",
            casa: 3.68,
            visitante: 1.50,
            unidade: "",
            destaque: true
        },
        {
            id: "finalizacoes",
            nome: "Finalizações",
            casa: 10,
            visitante: 9,
            unidade: "",
            destaque: true
        },
        {
            id: "finalizacoesGol",
            nome: "Finalizações ao gol",
            casa: 8,
            visitante: 6,
            unidade: "",
            destaque: true
        },
        {
            id: "defesas",
            nome: "Defesas",
            casa: 6,
            visitante: 5,
            unidade: "",
            destaque: true
        },
        {
            id: "finalizacoesArea",
            nome: "Finalizações dentro da área",
            casa: 4,
            visitante: 4,
            unidade: "",
            destaque: true
        },
    ],
    transmissoes: [
        {
            id: "premiere",
            nome: " Premiere",
            tipo: "TV por assinatura",
            sigla: "P",
            cor: "#12a36b"
        },
        {
            id: "getv",
            nome: " GE TV",
            tipo: "Streaming",
            sigla: "GE",
            cor: "#00b96c"
        },
        {
            id: "caze",
            nome: " Cazé TV",
            tipo: "Streaming",
            sigla: "C",
            cor: "#a57a03"
        },
    ],
    estadio: {
        nome: time[0].estadio,
        cidade: "Madrid - ES",
        foto: null
    },
};

export default partida;