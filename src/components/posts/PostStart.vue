<template>
    <div id="postStart">
        <p>Please select a Post</p>
        <hr>
        <ul class="list-group" v-for="post in posts">
            <li class="list-group-item">
                <h3>Author: </h3>
                {{ post.author }}
            </li>
            <li class="list-group-item">
                <h3>Title: </h3>
                {{ post.title }}
            </li>
            <li class="list-group-item">
                <strong><em>category: </em></strong> {{ post.category }}
            </li>
            <li class="list-group-item">
                <strong><em>image: </em></strong> {{ post.image }}
                <hr>
                <hr>
            </li>
        </ul>
    </div>
</template>

<script>
	import posts from './lib/posts'
	export default {
		data() {
			return {
				posts
			}
		}
	}
</script>

<style>
    li {
        cursor: pointer;
    }
</style>
