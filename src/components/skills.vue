<template>
    <div class="container-fluid my-4">
        <div class="container">
            <h2>A couple of skills.... </h2>
            <div class="row text-center">
                <div v-for="(skill, index) in skills" :key="index"  class=" col-xs-12 col-md-4 skillContainer my-2 p-2">
                    <h3 class="text-uppercase" >{{skill.name}}</h3>
                </div>
            </div>
        </div>
        <contact></contact>
    </div>
</template>

<script>
    import contact from "./contact";
    export default {
        name: "skills",
        data(){
            return{
                skills:{
                    1:{
                        'name':'php',
                        'active':'true'
                    },
                    2:{
                        'name':'javascript',

                        'active':'false'
                    },
                    3:{
                        'name':'C',
                        'active':'true'
                    },
                    4:{
                        'name':'C #',
                        'active':'false'
                    },
                    5:{
                        'name':'Mysql',

                        'active':'true'
                    },
                    6:{
                        'name':'Bootstrap',
                        'active':'false'
                    },
                    8:{
                        'name':'Vue.js',
                        'active':'true'
                    },
                    9:{
                        'name':'Typescript',
                        'active':'false'
                    },
                    10:{
                        'name':'PhphUnit',
                        'img':'',
                        'active':'true'
                    },
                    11:{
                        'name':'phpspec',
                        'img':'',
                        'active':'false'
                    },
                    12:{
                        'name':'symfony',
                        'img':'',
                        'active':'true'
                    },
                    13:{
                        'name':'doctrine',
                        'img':'',
                        'active':'false'
                    },
                    14:{
                        'name':'npm',
                        'img':'',
                        'active':'true'
                    },
                    15:{
                        'name':'html',
                        'img':'',
                        'active':'false'
                    },
                    16:{
                        'name':'CSS',
                        'img':'',
                        'active':'true'
                    },
                    17:{
                        'name':'Node.Js',
                        'img':'',
                        'active':'false'
                    },

                }
            }
        },
        components: {
            contact
        }
    }
</script>

<style scoped>

    .skillContainer{
        border-radius: 45px;
    }
    .skillContainer:nth-child(even){
        background: #CCC;
        border: solid black;
     }
    .skillContainer:nth-child(odd){
        background: #FFF;
        border: solid black;
    }

</style>