<template>
    <div class="text-center">
        <div class="container-fluid py-5  works" v-for="(work, index) in works" :key="index">
            <div class="col-6 mx-auto">
                <img v-if="work.img" :src='work.img' alt=""/>
                <h1> {{work.title}}</h1>
                <p>{{work.description}}</p>
                <a class="btn btn-outline-dark" :href="work.link">
                    <i class="fa fa-github"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "work",
        data()
        {
            return {
                works: {
                    1: {
                        'title': 'Testing testing testing',
                        'description': ' As part of Made simple group, i have being writting/developing tests to verify new features',
                        'img': '',
                        'link': 'https://www.companiesmadesimple.com/'
                    },
                    2: {
                        'title': 'Music collection app',
                        'description': 'A simple music library with login using MVC framework. That list users preferend artists, albums an musics.',
                        'img': '',
                        'link': 'https://github.com/a2pr/musiccollection'
                    },
                    3: {
                        'title': 'Modify Rss reader',
                        'description': 'A simple rss reader i modify to get the contents from new post from reddit and mangadex',
                        'img': '',
                        'link': 'https://github.com/a2pr/rss-personal-reader'
                    },
                    4: {
                        'title': 'FinatialTracking App',
                        'description': 'Currently working in an app to store daily income and expenses, using dinamic funds and subfunds ' +
                            'that the user can modify depending of need.\n' +
                            'Using graphics to show user expending behavior and alarms to notify self-proclaimed limit reach in each sub-fund created.',
                        'img': '',
                        'link': 'https://github.com/a2pr/fta-project'
                    },
                    5: {
                        'title': 'Pizza management app',
                        'description': 'App to manage pizzeria management routines and adding new orders from client, using login for users and admin.',
                        'img': '',
                        'link': 'https://github.com/a2pr/Programa-PIM'
                    }
                }
            }
        }
    }
</script>

<style scoped>

    .works:nth-child(even){
        background: #CCC;
    }
    .works:nth-child(odd){
        background: #FFF;
    }


    i{
        font-size: 40px;
    }
</style>