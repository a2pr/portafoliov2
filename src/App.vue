<template>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/header';
    import Footer from './components/footer';

    export default {
        name: 'App',
        components: {
            appHeader: Header,
            appFooter: Footer
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
