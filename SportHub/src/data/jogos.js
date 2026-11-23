import time from "./times.js";
import campeonato from "./campeonatos.js";

const buscarTime = (id) => time.find((t) => t.id === id);

const jogos = [
    {
        id: 1,
        timeCasa: buscarTime('real-madrid'),
        timeVisitante: buscarTime('barcelona'),
        horario: '21:00',
        campeonato: campeonato[0],
        estadio: buscarTime('real-madrid').estadio,
        placarCasa: 2,
        placarVisitante: 1,
        situacao: 'Ao Vivo',
        minuto: "73:28"
    },

    {
        id: 2,
        timeCasa: buscarTime('barcelona'),
        timeVisitante: buscarTime('psg'),
        horario: '15:00',
        campeonato: campeonato[2],
        estadio: buscarTime('barcelona').estadio,
        placarCasa: 2,
        placarVisitante: 1,
        situacao: 'Ao Vivo',
        minuto: "28:12"
    },

    {
        id: 3,
        timeCasa: buscarTime('real-madrid'),
        timeVisitante: buscarTime('psg'),
        horario: '17:00',
        campeonato: campeonato[2],
        estadio: buscarTime('real-madrid').estadio,
        placarCasa: 3,
        placarVisitante: 0,
        situacao: 'Finalizado',
        minuto: "90:00"
    },

    {
        id: 4,
        timeCasa: buscarTime('atletico-madrid'),
        timeVisitante: buscarTime('athletic-bilbao'),
        horario: '16:30',
        campeonato: campeonato[0],
        estadio: buscarTime('atletico-madrid').estadio,
        placarCasa: 1,
        placarVisitante: 1,
        situacao: 'Ao Vivo',
        minuto: "54:10"
    },

    {
        id: 5,
        timeCasa: buscarTime('real-sociedad'),
        timeVisitante: buscarTime('real-betis'),
        horario: '14:00',
        campeonato: campeonato[0],
        estadio: buscarTime('real-sociedad').estadio,
        placarCasa: 2,
        placarVisitante: 0,
        situacao: 'Finalizado',
        minuto: "90:00"
    },

    {
        id: 6,
        timeCasa: buscarTime('sevilla'),
        timeVisitante: buscarTime('villarreal'),
        horario: '18:00',
        campeonato: campeonato[0],
        estadio: buscarTime('sevilla').estadio,
        placarCasa: 0,
        placarVisitante: 0,
        situacao: 'Agendado',
        minuto: "00:00"
    },

    {
        id: 7,
        timeCasa: buscarTime('flamengo'),
        timeVisitante: buscarTime('palmeiras'),
        horario: '21:30',
        campeonato: campeonato[1],
        estadio: buscarTime('flamengo').estadio,
        placarCasa: 2,
        placarVisitante: 2,
        situacao: 'Ao Vivo',
        minuto: "81:45"
    },

    {
        id: 8,
        timeCasa: buscarTime('corinthians'),
        timeVisitante: buscarTime('sao-paulo'),
        horario: '16:00',
        campeonato: campeonato[1],
        estadio: buscarTime('corinthians').estadio,
        placarCasa: 1,
        placarVisitante: 0,
        situacao: 'Finalizado',
        minuto: "90:00"
    },

    {
        id: 9,
        timeCasa: buscarTime('gremio'),
        timeVisitante: buscarTime('internacional'),
        horario: '18:30',
        campeonato: campeonato[1],
        estadio: buscarTime('gremio').estadio,
        placarCasa: 1,
        placarVisitante: 1,
        situacao: 'Ao Vivo',
        minuto: "39:15"
    },

    {
        id: 10,
        timeCasa: buscarTime('atletico-mg'),
        timeVisitante: buscarTime('cruzeiro'),
        horario: '19:00',
        campeonato: campeonato[1],
        estadio: buscarTime('atletico-mg').estadio,
        placarCasa: 3,
        placarVisitante: 1,
        situacao: 'Finalizado',
        minuto: "90:00"
    },

    {
        id: 11,
        timeCasa: buscarTime('botafogo'),
        timeVisitante: buscarTime('fluminense'),
        horario: '20:00',
        campeonato: campeonato[1],
        estadio: buscarTime('botafogo').estadio,
        placarCasa: 0,
        placarVisitante: 0,
        situacao: 'Agendado',
        minuto: "00:00"
    },

    {
        id: 12,
        timeCasa: buscarTime('bahia'),
        timeVisitante: buscarTime('fortaleza'),
        horario: '21:00',
        campeonato: campeonato[1],
        estadio: buscarTime('bahia').estadio,
        placarCasa: 2,
        placarVisitante: 1,
        situacao: 'Finalizado',
        minuto: "90:00"
    }
];

export default jogos;