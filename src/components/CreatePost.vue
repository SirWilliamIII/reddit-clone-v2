<template>
    <div>
        <form class="form">
            <div class="form-group">
                <label for="username">Username</label> <input v-model="post.username" class="form-control" id="username"
                placeholder="username">
            </div>
            <div class="form-group">
                <label for="title">Title</label> <input v-model="post.title" class="form-control" id="title"
                placeholder="Title">
            </div>
            <div class="form-group">
                <label for="body">Body</label> <textarea v-model="post.body" class="form-control" id="body"
                placeholder="body"></textarea>
            </div>
            <div class="form-group">
                <label for="image_url">Image URL</label> <input v-model="post.image_url" class="form-control"
                id="image_url"
                placeholder="image_url">
            </div>

            <button @click="addPost" type="button" class="btn btn-success">
                Add Post
            </button>
            <button @click="submit" class="btn btn-info">
                http
            </button>
        </form>
    </div>
</template>

<script>
	import posts from './posts/lib/posts'

	export default {
		name:    'createPostForm',
		data() {
			return {
				posts,
				post: {
					username:   '',
					title:    '',
					body: '',
					image_url:    ''
				}
			}
		},
		methods: {
			addPost() {
				console.log(this.post.username)
				this.posts.push({
					username:   this.post.username,
					title:    this.post.title,
					body: this.post.body,
					image_url:    this.post.image_url
				});
				this.post.username = ''
				this.post.title = ''
				this.post.body = ''
				this.post.image_url = ''
			}
		}
	}
</script>

<style>
</style>
