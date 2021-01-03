<template>
    <div class="text-center">
        <div class="container-fluid py-5  works" v-for="(work, index) in works" :key="index">
            <div class="offset-md-3 col-md-6 col-xs-8">
                <img v-if="work.img" width="70%"  :src="require(`@/assets/imgs/${work.img}`)" alt="img"/>
                <h1> {{work.title}}</h1>
                <p>{{work.description}}</p>
                <a v-if="work.link" class="btn btn-outline-dark" :href="work.link">
                    <i class="fa fa-link"></i>
                </a>
                <a v-else class="btn btn-outline-dark" :href="work.project">
                    <i class="fa fa-folder-open"></i>
                </a>
            </div>
        </div>
        <fiverr></fiverr>
        <contact></contact>
    </div>
</template>

<script>
    import contact from "./contact";
    import fiverr from "./fiverr";

    export default {
        name: "work",
        components: {
            contact,
            fiverr
        },
        data()
        {
            return {
                works: {
                    1: {
                        'title': 'Testing testing testing',
                        'description': ' As part of Made simple group, I have being writing/developing tests to verify new features',
                        'img': '',
                        'project': 'https://www.companiesmadesimple.com/'
                    },
                    2: {
                        'title': 'Music collection app',
                        'description': 'A simple music library,  with login interface taking advantage of using MVC framework. ' +
                            'It lists the user\'s preferred artists, albums and songs.',
                        'img': '',
                        'link': 'https://github.com/a2pr/musiccollection'
                    },
                    3: {
                        'title': 'Modify Rss reader',
                        'description': 'A simple rss reader I modified to get the contents from new posts from Reddit and Mangadex',
                        'img': '',
                        'link': 'https://github.com/a2pr/rss-personal-reader'
                    },
                    4: {
                        'title': 'Finatial Tracking App',
                        'description': 'Alpha version done for the app to store daily income and expenses. It uses dynamic ' +
                            'funds and subfunds that the user can modify according to his needs. It also shows the spending ' +
                            'behavior and sets alarm to notify if a selected limit is reached in expenses',
                        'img': 'ftapp.png',
                        'link': 'https://ftapp-production.herokuapp.com/'
                    },
                    5: {
                        'title': 'Pizza management app',
                        'description': 'App for restaurant routines. It keeps track of orders, has login for regular users and admins',
                        'img': '',
                        'link': 'https://github.com/a2pr/Programa-PIM'
                    },
                    6: {
                        'title': 'Movie theaters app',
                        'description': 'App for small Movie theaters network, for ticket sell using debit, credit cards and criptocurrency. Project base on C#',
                        'img': '',
                        'link': 'https://github.com/a2pr/cinemaPIM'
                    }
                }
            }
        }
    }
</script>

<style scoped>

    .works:nth-child(even) {
        background: #CCC;
    }

    .works:nth-child(odd) {
        background: #FFF;
    }

    p {
        font-size: 1.25rem;
    }

    i {
        font-size: 40px;
    }
</style>