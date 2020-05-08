<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <router-link tag="li" to="/" class="nav-item active">
                    <a class="nav-link"> Welcome</a>
                </router-link>
                <router-link tag="li" to="/work" class="nav-item">
                    <a class="nav-link"> Work</a>
                </router-link>
                <router-link tag="li" to="/impossible" class="nav-item">
                    <a class="nav-link">Impossible List</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>