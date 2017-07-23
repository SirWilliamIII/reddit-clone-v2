<template>
    <div id="postsPage">
        <PostNavigation/>
        <PostStart/>
    </div>
</template>

<script>
    import PostStart from './PostStart.vue'
    import PostNavigation from './PostNavigation.vue'
    export default {
    	components: {
            PostStart,
            PostNavigation
        }
    }
</script>
