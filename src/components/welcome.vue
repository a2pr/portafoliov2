<template>
    <div class="container-fluid">
        <div class="row">
            <section class=" bg-light text-center col-md-12">
                <article class="my-5 py-lg-5">
                    <h1>Hello there.</h1>
                    <div>
                        <p> I´m web developer based in Manaus, Brazil. I have a passion
                            for Learning new things and love to create things with it.</p>
                    </div>
                </article>
            </section>
        </div>
        <div class="row">
            <section class="bg-white text-center col-md-12">
                <article class="mt-5">
                    <h1>What I can do.</h1>
                    <h3>Create your ideal website for your business.</h3>
                    <p> Do you have a business that needs a website? I can help you with that, using modern technologis.
                    </p>
                </article>
                <article class="mt-5">
                    <h1> I can help you.</h1>
                    <h3>I´m currently looking for freelance work.</h3>
                    <p>If you have a project you want to start, or help with any existent project. Get in touch</p>
                </article>
            </section>
        </div>
        <contact></contact>
    </div>
</template>

<script>
    import contact from "./contact";
    export default {
        name: "welcome",
        components:{
            contact
        }
    }
</script>

<style scoped>

</style>