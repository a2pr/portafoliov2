<template>
    <div class="container-fluid py-3">
        <h2> Checkout my Fiverr gigs</h2>
        <div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget' style='display: inline-block;'>
            <a itemprop='url' href=https://www.fiverr.com/a2payema rel="nofollow" target="_blank"
               style='display: inline-block;'>
                <div class='fiverr-seller-content'
                     id='fiverr-seller-widget-content-69c0f4b8-27fe-4ce0-86b2-63ff85d7cf67' itemprop='contentURL'
                     style='display: none;'></div>
                <div id='fiverr-widget-seller-data' style='display: none;'>
                    <div itemprop='name'>a2payema</div>
                    <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
                    <div itemprop='jobtitle'>Seller</div>
                    <div itemprop='description'>Hello world, I'm a university student working as a junior developer. Looking for exciting projects to use my knowledge.</div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fiverr",
        mounted()
        {
            let externalScript = document.createElement('script')
            externalScript.setAttribute('id', 'fiverr-seller-widget-script-69c0f4b8-27fe-4ce0-86b2-63ff85d7cf67')
            externalScript.setAttribute('src', 'https://widgets.fiverr.com/api/v1/seller/a2payema?widget_id=69c0f4b8-27fe-4ce0-86b2-63ff85d7cf67')
            externalScript.setAttribute('data-config', '{"category_name":"Programming \u0026 Tech"}')
            externalScript.setAttribute('async', true)
            externalScript.setAttribute('defer', true)
            document.head.appendChild(externalScript)
        }
    }
</script>

<style scoped>

</style>