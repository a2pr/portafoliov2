<template>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from './components/header';
    import AppFooter from './components/footer';

    export default {
        name: 'App',
        components: {
            appHeader: AppHeader,
            appFooter: AppFooter
        },
        data(){
            return{
                publicPath: process.env.BASE_URL
            }
        }
    }
</script>

<style>

</style>
