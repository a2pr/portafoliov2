import Vue from 'vue'
import Vuex from 'vuex'
import skills from "./modules/skills";
import works from "./modules/works";
import impossible from "./modules/impossible";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{
        skills,
        works,
        impossible
    }
})