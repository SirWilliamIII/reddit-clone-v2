<template>
    <div>
        <form class="form">
            <div class="form-group">
                <label for="author">Author</label> <input v-model="post.author" class="form-control" id="author"
                placeholder="Author name">
            </div>
            <div class="form-group">
                <label for="title">Title</label> <input v-model="post.title" class="form-control" id="title"
                placeholder="Title">
            </div>
            <div class="form-group">
                <label for="category">Category</label> <input v-model="post.category" class="form-control" id="category"
                placeholder="Category">
            </div>
            <div class="form-group">
                <label for="image">Image</label> <input v-model="post.image" class="form-control" id="image"
                placeholder="Image Url">
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
