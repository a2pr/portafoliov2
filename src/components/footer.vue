<template>
  <div class="container-fluid bg-secondary py-3">
<!--    continue here missing mobile config-->
    <div class="text-center mt-2">
      <div class="row">
        <div class="col-2 offset-1">
          <a class="btn btn-lg btn-light" href="https://www.linkedin.com/in/andrespayema" target="_blank">
            <font-awesome-icon size="3x" :icon="['fab', 'linkedin-in']"/>
          </a>
        </div>
        <div class="col-2">
          <a class="badge badge-light" href="https://github.com/a2pr" target="_blank">
            <font-awesome-icon size="3x" :icon="['fab', 'github']"/>
          </a>
        </div>
        <div class="col-2">
          <a class="badge badge-light" href="https://www.instagram.com/payemastech/" target="_blank">
            <font-awesome-icon size="3x" :icon="['fab', 'instagram']"/>
          </a>
        </div>
        <div class="col-2">
          <a class="badge badge-light" href="https://www.youtube.com/channel/UCwP1bNJCqKg9qHGi2Mgz0DA" target="_blank">
            <font-awesome-icon size="3x" :icon="['fab', 'youtube']"/>
          </a>
        </div>
        <div class="col-2">
          <a class="badge badge-light" href="mailto:a2payema.work@gmail.com?subject=Hello%20andres" target="_blank">
            <font-awesome-icon size="3x" :icon="['fas', 'envelope']"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer"
}
</script>

<style scoped>

a {
  font-size: 1.25rem;
}
</style>