<template>
    <div class="text-center">
        <div class="container-fluid py-5  works" v-for="(work, index) in getWorks" :key="index">
            <div class="offset-md-3 col-md-6 col-xs-8">
                <div v-if="work.youtube">
                  <iframe width="560" height="315" :src="work.youtube" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                  </iframe>
                </div>
                <div v-else-if="work.img">
                  <img width="70%"  :src="require(`@/assets/imgs/${work.img}`)" alt="img"/>
                </div>
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

            }
        },
      computed:{
          getWorks(){
            return this.$store.getters.getWorks
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