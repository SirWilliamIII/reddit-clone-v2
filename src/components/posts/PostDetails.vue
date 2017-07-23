<template>
    <div id="postDetails">
        <div class="panel panel-default">
            <div class="panel-heading">{{ postHeading }}</div>
            <div class="panel-body">
                {{ postContent }}
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">{{ postTitle }}</h3>
            </div>
            <div class="panel-body">
                {{ postContent }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    	data() {
    		return {
    			postHeading: 'Post Heading',
                postTitle: 'Post Title',
                postContent: 'Content'
            }
        }
    }

</script>

<style>

</style>
