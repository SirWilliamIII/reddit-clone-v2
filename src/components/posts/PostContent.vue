<!--suppress ALL -->

<template>
    <div id="postContent">
        <ul class="list-group" v-for="post in posts">
            <li class="list-group-item">
                <h3>Author: </h3>
                {{ post.username }}
            </li>
            <li class="list-group-item">
                <h3>Title: </h3>
                {{ post.title }}
            </li>
            <li class="list-group-item">
                <h3>Body: </h3>
                {{ post.body }}
            </li>

            <li class="list-group-item">
                <strong><em>Comments: </em></strong>There are {{ showCounter(counter) }} comments
            </li>
            <li class="list-group-item">
                <img width="400" height="550" v-bind:src="post.image_url"/>
            </li>
            <hr>
        </ul>
    </div>
</template>

<script>
	import posts from './lib/posts'
	export default {
		name:    'postContent',
		data() {
			return {
				posts,
				counter: 0
			}
		},
		methods: {
			showCounter(counter) {
				return counter !== 0 ? counter : 0
			}
		}
	}
</script>

<style>
    li {
        cursor: pointer;
    }

    .list-group {
        border:     1px solid cornflowerblue;
        margin-top: 0px;
    }

    .list-group-item {

    }
</style>
