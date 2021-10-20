import goals from "./imposible-list";

const state = {
    description: " This was an idea that i take from Thomas Frank. Probably you know the term of a bucket list, a list of things you wanted to do before you die. A list that could contain a journey you have postpone\n" +
        "        for different reasons, lost some weight or to read 15 books a year. But this list probably hasn't been part of an active role in your life. An impossible list makes you want to pursuit this goals, dreams or objectives\n" +
        "        in an active way, keeping you accountable and remind you of the the things you set for yourself.\n" +
        "        I recommend this video about it, for more explanation about the concept.",
    currentFocus: {
        description: "Right now my main focus is in a couple of projects for my personal interest. That will help in not only programming proficiency, but also\n" +
            "        in project management.",
        currentList: [
            "GCP courses",
            "Ashirpa project",
            "Yunyun project",
            "Notion Automation",
            "Ruby on rails studies"
        ],
        lastAchievements: [
            {description: "Win an independent pay for 50$ (28/06/2021)", useLink: false},
            {description: "Set up a first project in hostgator with Wordpress(05/07/2021)", useLink: false},
            {description: "Win an independent pay for 300$ (31/08/2021)", useLink: false},
            {description: "Buy a working laptop (01/09/2021)", useLink: false},
            {description: "Reduce weigth to 80-85 kg (01/10/2021)", useLink: false},
        ]
    },
    sections: goals
}
/** working on this**/
const getters = {
    getDescriptionImpossible: (state) => {
        return state.description
    },
    getCurrentFocusImpossible: (state) => {
        return state.currentFocus
    },
    getSections: (state)=>{
        return state.sections
    }
}

export default {
    state,
    getters
}