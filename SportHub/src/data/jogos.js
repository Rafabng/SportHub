import time from "./times.js";
import campeonato from "./campeonatos.js";

const jogos = [
    {
        id: 1,
        timeCasa: time[0],
        timeVisitante: time[1],
        horario: '21:00',
        campeonato: campeonato[0],
        estadio: time[0].estadio,
        placarCasa: 2,
        placarVisitante: 1,
        situacao: 'Ao Vivo',
        minuto: "73:28"
    },

    {
        id: 2,
        timeCasa: time[1],
        timeVisitante: time[2],
        horario: '15:00',
        campeonato: campeonato[2],
        estadio: time[1].estadio,
        placarCasa: 2,
        placarVisitante: 1,
        situacao: 'Ao Vivo',
        minuto: "28:12"

    },

    {
        id: 3,
        timeCasa: time[0],
        timeVisitante: time[2],
        horario: '17:00',
        campeonato: campeonato[2],
        estadio: time[0].estadio,
        placarCasa: 3,
        placarVisitante: 0,
        situacao: 'Finalizado',
        minuto: "90:00"
    },
];

export default jogos;