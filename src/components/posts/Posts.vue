<template>
    <div id="postsPage">
        <PostStart/>
        <PostDetails/>
    </div>
</template>

<script>
    import PostStart from './PostStart.vue'
    import PostDetails from './PostDetails.vue'


    export default {
    	components: {
            PostStart,
    		PostDetails
        }
    }
</script>
