<template>
    <div id="postNavigation">
        <div class="dropdown">
            <button id="sortBtn" class="btn btn-outline-warning dropdown-toggle pull-right" type="button"
                data-toggle="dropdown">
                Sort By <span class="caret"/>
            </button>
            <ul class="dropdown-menu pull-right">
                <li @click="sortAuthors"><a>Author</a></li>
                <li><a>Title</a></li>
                <li><a>Category</a></li>
            </ul>
        </div>

    </div>
</template>

<script>
	export default {
		name:    'postNavigation',
		data() {
			return {}
		},
		methods: {
			sortAuthors() {

            }
        }
	}
</script>

<style>
    #sortBtn {
        margin-top: -20px;
    }
</style>
