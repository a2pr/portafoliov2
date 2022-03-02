const state = {
    description: " This was an idea that i take from Thomas Frank. Probably you know the term of a bucket list, a list of things you wanted to do before you die. A list that could contain a journey you have postpone\n" +
        "        for different reasons, lost some weight or to read 15 books a year. But this list probably hasn't been part of an active role in your life. An impossible list makes you want to pursuit this goals, dreams or objectives\n" +
        "        in an active way, keeping you accountable and remind you of the the things you set for yourself.\n" +
        "        I recommend this video about it, for more explanation about the concept.",
    currentFocus: {
        description: "Right now my main focus is in a couple of projects for my personal interest. That will help in not only programming proficiency, but also\n" +
            "        in project management.",
        currentList: [
            "Kubernetes Course",
            "Rest Api Standards"
        ],
        lastAchievements: [
            {description: "Travel to Santa Catarina (11/2021)", useLink: false},
            {description: "Obtain salary of R$ 8000/1500$ (28/11/2021)", useLink: false},
            {description: "Complete course APIs in PHP: from Basic to Advanced (16-01-2022)", useLink: false},
            {description: "Travel to the USA", useLink: false},
            {description: "Win an independent pay for 400$ (07/02/2022)", useLink: false}
        ],
        sections: [
            {
                name: "New skills",
                items: [
                    {name:"", hasChild: true ,completed: true, items:[]}
                ]
            }
        ]
    }
}
/** working on this**/
const getters = {
    getDescriptionImpossible: (state) => {
        return state.description
    },
    getCurrentFocusImpossible: (state) => {
        return state.currentFocus
    }
}

export default {
    state,
    getters
}