<template>
  <div class="container-fluid mt-4 px-0">
    <div class="container">
      <h2> I have expirences in the following .... </h2>
      <div class="row text-center">
        <div v-for="(skill, index) in getSkills" class="skillContainer col-xs-12 col-md-4  my-2 p-2" :key="index">
          <h3 class="text-uppercase">{{ skill.name }}</h3>
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
  data()
  {
    return {

    }

  },
  computed:{
    getSkills(){
      return this.$store.getters.getActiveSkillItems
    }
  },
  components: {
    contact
  }
}
</script>

<style scoped>

.skillContainer {
  border-radius: 45px;
}

.skillContainer:nth-child(even) {
  background: #CCC;
  border: solid black;
}

.skillContainer:nth-child(odd) {
  background: #FFF;
  border: solid black;
}

</style>