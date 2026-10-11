/* Dados de exemplo da tela de estatísticas */

import { Minimize } from "lucide-react";

const partida = {
    id: "fla-pal-2026-r23",
    competicao: {
        nome: "Brasileirão Série A 2026",
        rodada: "Rodada 23"
    },
    status: "Encerrado",
    dataHora: "2026-09-02T21:30:00-03:00",

    // Logo (caso não houver, <TeamCrest> utiliza a sigla como escudo)
    casa: {
        nome: "Flamengo",
        sigla: "FLA",
        cor: "#d9363e",
        logo: null
    },
    visitante: {
        nome: "Palmeiras",
        sigla: "PAL",
        cor: "#2f9e57",
        logo: null
    },
    placar: {
        casa: 2,
        visitante: 1
    },
    gols: {
        casa: [
            {
                jogador: "Pedro",
                minuto: 12
            },
            {
                jogador: "Arrascaeta", 
                minuto: 78
            }
        ],
        visitante: [
            {
                jogador: "Endrick",
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
            id: "posse",
            nome: "Posse de bola",
            casa: 58,
            visitante: 42,
            unidade: "%",
            destaque: true
        },
        {
            id: "posse",
            nome: "Posse de bola",
            casa: 58,
            visitante: 42,
            unidade: "%",
            destaque: true
        },
        {
            id: "posse",
            nome: "Posse de bola",
            casa: 58,
            visitante: 42,
            unidade: "%",
            destaque: true
        },
        {
            id: "posse",
            nome: "Posse de bola",
            casa: 58,
            visitante: 42,
            unidade: "%",
            destaque: true
        },
        {
            id: "posse",
            nome: "Posse de bola",
            casa: 58,
            visitante: 42,
            unidade: "%",
            destaque: true
        },
    ],
    transmissoes: [
        {
            id: "premiere",
            nome: "Premiere",
            tipo: "TV por assinatura",
            sigla: "P",
            cor: "#12a36b"
        },
        {
            id: "premiere",
            nome: "Premiere",
            tipo: "TV por assinatura",
            sigla: "P",
            cor: "#12a36b"
        },
        {
            id: "premiere",
            nome: "Premiere",
            tipo: "TV por assinatura",
            sigla: "P",
            cor: "#12a36b"
        },
    ],
    estadio: {
        nome: "Maracanã",
        cidade: "Rio de Janeiro - RJ",
        foto: null
    },
};

export default partida;