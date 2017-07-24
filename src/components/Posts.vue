<template>
    <div id="postsPage">
        <PostNavigation/>
        <PostContent/>
    </div>
</template>

<script>
    import PostContent from './posts/PostContent.vue'
    import PostNavigation from './posts/PostNavigation.vue'
    export default {
    	components: {
            PostContent,
            PostNavigation
        }
    }
</script>
