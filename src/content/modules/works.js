const state = {
    works: [
        {
            'id': 1,
            'title': 'Testing testing testing',
            'description': ' As part of Made simple group, I have being writing/developing tests to verify new features',
            'img': '',
            'project': 'https://www.companiesmadesimple.com/'
        },
        {
            'id': 2,
            'title': 'Music collection app',
            'description': 'A simple music library,  with login interface taking advantage of using MVC framework. ' +
                'It lists the user\'s preferred artists, albums and songs.',
            'img': '',
            'link': 'https://github.com/a2pr/musiccollection'
        },
        {
            'id': 3,
            'title': 'Modify Rss reader',
            'description': 'A simple rss reader I modified to get the contents from new posts from Reddit and Mangadex',
            'img': '',
            'link': 'https://github.com/a2pr/rss-personal-reader'
        },
        {
            'id': 4,
            'title': 'Finatial Tracking App',
            'description': 'Alpha version done for the app to store daily income and expenses. It uses dynamic ' +
                'funds and subfunds that the user can modify according to his needs. It also shows the spending ' +
                'behavior and sets alarm to notify if a selected limit is reached in expenses',
            'img': 'ftapp.png',
            'link': 'https://ftapp-production.herokuapp.com/',
            'youtube': 'https://www.youtube.com/embed/lKlSSO9HCeA'
        },
        {
            'id': 5,
            'title': 'Pizza management app',
            'description': 'App for restaurant routines. It keeps track of orders, has login for regular users and admins',
            'img': '',
            'link': 'https://github.com/a2pr/Programa-PIM'
        },
        {
            'id': 6,
            'title': 'Movie theaters app',
            'description': 'App for small Movie theaters network, for ticket sell using debit, credit cards and criptocurrency. Project base on C#',
            'img': '',
            'link': 'https://github.com/a2pr/cinemaPIM'
        },
        {
            'id': 7,
            'title': 'Yunyun',
            'description': 'Exchange currency app, for spanish talking user.',
            'img': 'yunyun.png',
            'link': 'https://yunyun-20.herokuapp.com/'
        },
        {
            'id':8,
            'title':'Ashirpa',
            'description':'A news reports blog using a wordpress solution with docker-compose as dev environment',
            'img':'ashirpa.png',
            'link':'https://www.focandonopositivo.com.br/'
        }
    ]
}

const getters = {
    getWorks: state => state.works
}

export default {
    state,
    getters
}