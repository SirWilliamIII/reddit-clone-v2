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
                <strong><em>Comments: </em></strong>
                <span>There are {{ showCounter(counter) }} comments</span>
                <span>To add a comment click here <button @click="addComment(this.comment)" class="btn btn-sm btn-info">add comment</button></span>
                <div>
                    <button id="badgeBtn" class="btn btn-sm btn-outline-info" type="submit" @click=""></button>
                </div>
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
				counter: 0,
                comments: []
			}
		},
		methods: {
			showCounter(counter) {
				return counter !== 0 ? counter : 0
			}
		},
        addComment(comment) {
             const badgeBtn = document.getElementById('badgeBtn')

			comments.push(comment)
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
