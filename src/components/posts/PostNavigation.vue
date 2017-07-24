<template>
    <div id="postNavigation">
        <div class="dropdown">
            <button id="sortBtn" class="btn btn-outline-warning dropdown-toggle pull-right" type="button"
                data-toggle="dropdown">
                Sort By <span class="caret"/>
            </button>
            <ul class="dropdown-menu pull-right">
                <li @click="sortByAuthor"><a>Author</a></li>
                <li @click="sortByTitle"><a>Title</a></li>
                <li @click="sortByCategory"><a>Category</a></li>
            </ul>
        </div>

    </div>
</template>

<script>
	import posts from './lib/posts'
	export default {
		name:    'postNavigation',
		data() {
			return {
				posts
			}
		},
		methods: {
			sortByAuthor() {
				posts.sort(function (a, b) {
					return a.author.localeCompare(b.author);
				})
			},
			sortByTitle() {
				posts.sort(function (a, b) {
					return a.title.localeCompare(b.title);
				})

			},
			sortByCategory() {
				posts.sort(function (a, b) {
					return a.category.localeCompare(b.category);
				})
			}
		}
	}
</script>

<style>
    #sortBtn {
        margin-top: -40px;
    }
</style>
