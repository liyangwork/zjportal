<template>
    <div class="HelloWorld">
        <h1>{{ this.$route.query.msg }}</h1>
        <p>Welcome to your new single-page application, built with <a href="https://vuejs.org" target="_blank">Vue.js</a>.</p>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        props: {
            msg: String
        }
    }
</script>

<style scoped>

</style>