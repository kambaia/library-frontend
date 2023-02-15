
  import { CreditCard } from '@mui/icons-material';

  export const cardsData = [
    {
      id:0,
      title: "Saldo Ganho",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      balance: "25.970,00",
      weeklyBalance: 'Está semana',
      png: CreditCard,
      series: [
        {
          name: "Saldo Ganho",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      id:1,
      title: "Livros Lidos",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "270",
      weeklyBalance: 'Últimas 2 semanas',
      png: CreditCard,
      series: [
        {
          name:  "Alunos da Turma",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      id:2,
      title: "Livros Baixados",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "3092",
      weeklyBalance: 'Últimas 2 semanas',
      png: CreditCard,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
    {
      id:3,
      title: "Pessoas acessando",
      color: {
        backGround:
          "linear-gradient(rgb(2, 0, 154) -146.42%, rgb(2 202 1) -46.42%)",
        boxShadow: "0px 10px 20px 0px #02CA01",
      },
      barValue: 60,
      value: "3092",
      png: CreditCard,
      weeklyBalance: 'Últimas horas',
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
