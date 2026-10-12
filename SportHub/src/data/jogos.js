import time from "./times.js";

const jogos = [
    {
        timeCasa: time[0],
        timeVisitante: time[1],
        horario: '21:00',
        campeonato: 'La Liga',
        estadio: time[0].estadio,
        placarCasa: 2,
        placarVisitante: 1,
        situacao: 'Ao Vivo',
        minuto: "73:28"
    },

    {
        timeCasa: time[1],
        timeVisitante: time[2],
        horario: '15:00',
        campeonato: 'Champions League',
        estadio: time[1].estadio,
        placarCasa: 2,
        placarVisitante: 1,
        situacao: 'Ao Vivo',
        minuto: "28:12"

    },

    {
        timeCasa: time[0],
        timeVisitante: time[2],
        horario: '17:00',
        campeonato: 'Champions League',
        estadio: time[0].estadio,
        placarCasa: 3,
        placarVisitante: 0,
        situacao: 'Finalizado',
        minuto: "90:00"
    },
];

export default jogos;