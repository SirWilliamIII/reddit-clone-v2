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
                <label for="body">Body</label> <input v-model="post.body" class="form-control" id="body"
                placeholder="body">
            </div>
            <div class="form-group">
                <label for="image_url">Image URL</label> <input v-model="post.image_url" class="form-control" id="image_url"
                placeholder="image_url">
            </div>

            <button @click="addPost" type="button" class="btn btn-success">
                Add Post
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
					author:   '',
					title:    '',
					category: '',
					image:    ''
				}
			}
		},
		methods: {
			addPost() {
				this.posts.push({
					author:   this.post.author,
					title:    this.post.title,
					category: this.post.category,
					image:    this.post.image
				});
				this.post.author = ''
				this.post.title = ''
				this.post.category = ''
				this.post.image = ''
			}
		}
	}
</script>

<style>
</style>
