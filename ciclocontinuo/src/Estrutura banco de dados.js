
/*
 *      LearnI 
 * Autor: Jonas Henrique Nascimento
 * Data: 08/01/2020
 * Arquivo de estrutura de variáveis e fluxo de informção dentro do aplicativo
 * 
 * 
 * 
 */

Estrutura_dos_dados = {

    user: {
        configs: {
            language: String,
            timeOfStudy: Number,
            theme: String,
        },
        
        account: {
            name: String,
            uid: String,
            email: String,
            tokenAuth: String,
            tokenPremiun: String,
            photo: String,
            registrationMethod: String,
            location: String
        },
        
        app:{
            averagePoints: String,
            reasonForUse: String,
            studyCicle: String,
            schoolScore: String,
            school: String,
            schoolScore: String,
            scoreRanking: Number,
            cash: Number,
        },

        logs: {
            erros: [
                {date: Date, location: String, function: String, errorTitle: String, errorMessage: String, errorExtra: String},
            ],
        }
    },

    tasks: [
        {   id: Number,
            name: String,
            description: String,
            initialDate: Date,
            finalDate: Date,
            taskType: String,
            priority: Number,
            color: String,
            score: Number,
            subject: String,
            color: '',
        }
    ],

    subjects: {
        studies: [
            {
                id: Number, 
                date: Date, 
                inputText: String, 
                studyMethodState: String, 
                timeOfStudyState: String, 
                typeOfStudyState: String, 
                subjectState: String
            },
        ],
    
        subjects: [
            {   
                id: Number,
                name: String,
                teacher: String,
                place: String,
                pontuation: [Number, Number],
                absence: Number,
                weeklySchedule: [
                    {id: Number, name: String, set: Boolean, startTime: Number, finalTime: Number},
                    {id: Number, name: String, set: Boolean, startTime: Number, finalTime: Number},
                    {id: Number, name: String, set: Boolean, startTime: Number, finalTime: Number},
                    {id: Number, name: String, set: Boolean, startTime: Number, finalTime: Number},
                    {id: Number, name: String, set: Boolean, startTime: Number, finalTime: Number},
                    {id: Number, name: String, set: Boolean, startTime: Number, finalTime: Number},
                    {id: Number, name: String, set: Boolean, startTime: Number, finalTime: Number},
                ],
                color: String,
            },
        ],

        score: [
            {
                id: Number,
                taskId: Number,
                subject: String,
                score: Number,
            },
        ]
    },

    articles: {
        articlesInfo: [
            {id: Number, Likes: Number, img: String, title: String, readTime: Number, },
            /**
               Filtro:
                Data de lançamento
                Número de curtidas
                Curtidos
                Tempo de leitura
             */
        ],
        articlesData: [
            {id: Number, data: [ /* ToDo */ ]},
        ],
    },

    medals: [
        { name: String, state: Boolean, condicions: {objectiveOne: Number, objectiveTwo: Number, objectiveThree: Boolean} },
    ],

    statistics: {
        allTasksConcluided: Number,

        /*
         * num horas em aula
         * média de notas
         * média de atividades
         * média de satisfação
         * notas
         * pontuação de provas
         * esforço / resultado médio
         * total de faltas
         * quantidade de horas estudadas por dia
         */
    },
}




Firebase = {
// Palavras reservadas tem '_' como primeiro caractere
// Palavras referentes a regra de negócio tem '_' como primeiro e segundo caractere

    _inAppMessagin:{
        _title: String,
        _message: String,
    }


}



AsyncStorage = {

}
