<template>
    <div id="postsPage">
        <PostNavigation/>
        <PostList/>
    </div>
</template>

<script>
    import PostList from './posts/PostList.vue'
    import PostNavigation from './posts/PostNavigation.vue'
    export default {
    	components: {
            PostList,
            PostNavigation
        }
    }
</script>
