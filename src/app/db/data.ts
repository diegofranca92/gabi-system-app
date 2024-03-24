// A pessoa escolher o dia pra ver se ta disponivel ou
// ver de acordo com as que tem disponivel nos dias proximos (2 ou 3 dias a frente)
// O sistema junta as informações do Agendamento numa
// Só precisar que a Secretaria consiga visualizar,
// os horarios e dias das profissionais.
// E as profissionais porem marcar na agenda os dias que não estariam disponiveis

export const professionalList = [
  {
    id: 1,
    name: 'Gabi',
    bio: 'Profissional de excelencia',
    services: [
      {
        name: 'Cilios',
        duration: 3000,
        price: 100,
        description: '',
        avaiableDates: [
          {
            date: '04/05/2024',
            available: true,
            avaiableTimes: [8, 9, 10, 11],
          },
          {
            date: '05/05/2024',
            available: true,
            avaiableTimes: [8, 9, 10, 11],
          },
        ],
      },
      {
        name: 'SPA',
        duration: 3000,
        price: 100,
        description: '',
        avaiableDates: [
          {
            date: '01/05/2024',
            available: true,
            avaiableTimes: [8, 9, 10, 11],
          },
          {
            date: '10/05/2024',
            available: true,
            avaiableTimes: [8, 9, 10, 11],
          },
        ],
      },
    ],
  },
];

export const serviceList = [
  {
    id: 1,
    name: 'Cilios',
    description: '',
    duration: 3000,
    price: 100,
    professionals: [
      {
        id: 1,
        name: 'Gabi',
        price: 100,
        avaiableDates: [
          {
            date: '2021-01-01',
            available: true,
            avaiableTimes: [8, 9, 10, 11],
          },
        ],
      },
    ],
    avaiableDates: [
      {
        date: '01/05/2024',
        available: true,
        avaiableTimes: [8, 9, 10, 11],
      },
    ],
  },
];
