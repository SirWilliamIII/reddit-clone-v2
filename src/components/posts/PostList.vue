<template>
    <div id="postStart">
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
                <img width="400" height="550" v-bind:src="post.image"/>
            </li>
            <hr>
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
    .list-group {
        border: 1px solid cornflowerblue;
        margin-top: 0px;
    }
    .list-group-item {

    }
</style>
