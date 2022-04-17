import Goals from "../dtos/goals";

const newSkills = [
    new Goals("Speak, Lean and write Japanese", true, false,
        [
            new Goals("Write Hiragana", false, true),
            new Goals("Write Katakana", false, true),
            new Goals("Being able to mantain a simple conversation in japanese", false, false),
            new Goals("Kanji", true, false, [
                new Goals("50 basic", false, false, []),
                new Goals("100 basic", false, false, []),
            ]),
        ]
    ),
    new Goals("Learn Boxeo", false, false,),
    new Goals("Learn Arqueria", false, false,),
    new Goals("Learn to dance merengue", false, false,),
    new Goals("Learn to dance Forro", false, false,),
    new Goals("Learn to dance sertanejo", false, false,),
    new Goals("Learn to dance salsa", false, false,),
    new Goals("Learn barman", false, false,),
    new Goals("Learn to shoot a firearms", false, false,),
    new Goals("Learn Kendo", false, false,),
    new Goals("Learn new to brew new type of coffees", false, false,)
];

const finacialGoals = [
    new Goals("Create Cartera de investimentos 2022", true, false, []),
    new Goals("Apply 1000 in Renda variavel", true, false, []),
    new Goals("Complete reserva financiera in Tesouro Selic", true, false,
        [
            new Goals("3 months [Reserva financiera](https://www.youtube.com/watch?v=shfYMvEXqm4) (24/06/2021)", false, true, []),
            new Goals("6 months Reserva financiera", false, false, []),
            new Goals("12 months Reserva Financiera", false, false, []),

        ]),
    new Goals("Obtain ingress of R$ 5000/1000$ (28/06/2021)", true, true,
        [
            new Goals("Obtain an ingress of R$ 7000/1330$ (28/11/2021)", true, true, []),
            new Goals("Obtain an ingress of R$ 8000/1500$ (28/11/2021)", true, true, []),
            new Goals("Obtain an ingress of R$ 36125/7000$ [5.16 R$→1$]", true, false, []),

        ]),
    new Goals("Gain an independent salary of de 250$ (28/06/2021)", true, true,
        [
            new Goals("Gain a salary of 50$ (28/06/2021)", true, true, []),
            new Goals("Gain a salary of 300$ (31/08/2021)", true, true, []),
            new Goals("Gain a salary of 400$ (07/02/2022)", true, true, []),
        ]
    ),
    new Goals("Invest 500000 R$", true, false,
        [

            new Goals("Invest 15000 (14/11/2021)", true, true, []),
            new Goals("Invest 50000", true, false, []),
            new Goals("Invest 100000", true, false, []),
            new Goals("Invest 250000", true, false, []),
        ]
    )
];

const goals = [
    new Goals("New skills", true, false, newSkills),
    new Goals("Financial Goals", true, false, finacialGoals),
    new Goals("Travels goals", true, false, []),
    new Goals("Events to assist", true, false, []),
    new Goals("Programing goals", true, false, []),
    new Goals("Healthy goals", true, false, []),
]

export default goals;