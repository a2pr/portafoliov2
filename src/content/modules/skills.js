const state ={
    skills: [
        {
            'id':1,
            'name': 'php',
            'active': false
        },
        {
            'id':2,
            'name': 'javascript',
            'active': false
        },
        {
            'id':3,
            'name': 'C',
            'active': false
        },
        {
            'id':4,
            'name': 'C #',
            'active': false
        },
        {
            'id':5,
            'name': 'Mysql',
            'active': true
        },
        {
            'id':6,
            'name': 'Bootstrap 4',
            'active': true
        },
        {
            'id':8,
            'name': 'Vue.js',
            'active': true
        },
        {
            'id':9,
            'name': 'Typescript',
            'active': false
        },
        {
            'id':10,
            'name': 'PhpUnit',
            'active': true
        },
        {
            'id':11,
            'name': 'phpspec',
            'active': false
        },
        {
            'id':12,
            'name': 'Symfony',
            'active': true
        },
        {
            'id':13,
            'name': 'doctrine',
            'active': true
        },
        {
            'id':14,
            'name': 'npm',
            'active': true
        },
        {
            'id':15,
            'name': 'html',
            'active': false
        },
        {
            'id':16,
            'name': 'CSS',
            'active': false
        },
        {
            'id':17,
            'name': 'Node.Js',
            'active': true
        },
        {
            'id': 18,
            'name': 'Ruby',
            'active': false
        },
        {
            'id': 19,
            'name': 'JUnit',
            'active': false
        },
        {
            'id': 20,
            'name': 'Laravel',
            'active': true
        },
        {
            'id': 21,
            'name': 'gitlab CI',
            'active':true
        },
        {
            'id': 22,
            'name': 'docker',
            'active':true
        },
        {
            'id': 23,
            'name': 'docker Compose',
            'active':true
        },
        {
            'id': 25,
            'name': 'Kubernetes',
            'active':true
        },
        {
            'id': 24,
            'name': 'Google cloud Computing',
            'active':true
        },
        {
            'id': 25,
            'name': 'ruby & rails',
            'active':true
        },
        {
            'id': 26,
            'name': 'express',
            'active':true
        }
    ]
}

const getters ={
    getSkillItems: state => state.skills,
    getActiveSkillItems: state => state.skills.filter(function (item){
        return item.active === true
    })
}

export default {
    state,
    getters
}