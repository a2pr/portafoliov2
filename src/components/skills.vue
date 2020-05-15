<template>
    <div class="container-fluid my-4">
        <div class="container">
            <div class="row text-center">
                <div v-for="(skill, index) in skills" :key="index" class="col-4 skillContainer mt-2 p-2">
                    <h3 class="text-uppercase" v-bind:class="{badge: active}">{{skill.name}}</h3>
                    <img v-if="skill.img" class="img-fluid rounded" :src="skill.img" :alt="skill.name"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "skills",
        data(){
            return{
                skills:{
                    1:{
                        'name':'php',
                        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9ShU97ix596gvjP0Xsf8AeIrQCIUmaXPEsY0LseaEB2zPF75&s',
                        'active':'true'
                    },
                    2:{
                        'name':'javascript',
                        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf_OvtOnugC2rS83xXYlgl3_ruVTf1Z_n0wIN1bDpZ4e-bpUnugQ&s',
                        'active':'false'
                    },
                    3:{
                        'name':'C',
                        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmBPO1eBG2FSPhRgfWTEDmtWY-lFbocfZt0vv_ZaQRNqirkVTk&usqp=CAU',
                        'active':'true'
                    },
                    4:{
                        'name':'C #',
                        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmBPO1eBG2FSPhRgfWTEDmtWY-lFbocfZt0vv_ZaQRNqirkVTk&usqp=CAU',
                        'active':'false'
                    },
                    5:{
                        'name':'Mysql',
                        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROZAuraj254RPGmj5Nzxyndk2iY75SUIkhj0a48-F56B7aoR9K&usqp=CAU',
                        'active':'true'
                    },
                    6:{
                        'name':'Bootstrat',
                        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmJJLiLK3HUl1JJAcK4sHxtkzk9CfZ66cew0f8VGrH4NH-QLC1&usqp=CAU',
                        'active':'false'
                    },
                    8:{
                        'name':'Vue.js',
                        'img':'',
                        'active':'true'
                    },
                    9:{
                        'name':'Typescript',
                        'img':'',
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
                        'name':'NodeJs',
                        'img':'',
                        'active':'false'
                    },

                }
            }
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