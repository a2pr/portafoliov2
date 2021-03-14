import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        skills: {
            1: {
                'name': 'php',
                'active': true
            },
            2: {
                'name': 'javascript',
                'active': false
            },
            3: {
                'name': 'C',
                'active': false
            },
            4: {
                'name': 'C #',
                'active': false
            },
            5: {
                'name': 'Mysql',
                'active': true
            },
            6: {
                'name': 'Bootstrap',
                'active': false
            },
            8: {
                'name': 'Vue.js',
                'active': true
            },
            9: {
                'name': 'Typescript',
                'active': false
            },
            10: {
                'name': 'PhpUnit',
                'active': true
            },
            11: {
                'name': 'phpspec',
                'active': false
            },
            12: {
                'name': 'symfony',
                'active': true
            },
            13: {
                'name': 'doctrine',
                'active': false
            },
            14: {
                'name': 'npm',
                'active': true
            },
            15: {
                'name': 'html',
                'active': false
            },
            16: {
                'name': 'CSS',
                'active': true
            },
            17: {
                'name': 'Node.Js',
                'active': false
            },
            18: {
                'name': 'Ruby',
                'active': true
            },
            19: {
                'name': 'JUnit',
                'active': false
            },
            20: {
                'name': 'Doctrine',
                'active': true
            },
            21: {
                'name': 'Laravel',
                'active': true
            },
            22: {
                'name': 'gitlab CI',
                'active':true
            },
            23: {
                'name': 'docker',
                'active':true
            }
        }
    },
    getters: {
        getSkillItems: state => state.skills,
    },
    mutations:{
    }
})