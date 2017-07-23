<template>
    <div id="postNavigation">
        <div class="dropdown">
            <button id="sortBtn" class="btn btn-primary dropdown-toggle pull-right" type="button" data-toggle="dropdown">
                Sort By <span class="caret"/>
            </button>
            <ul class="dropdown-menu">
                <li><a href="#">Author</a></li>
                <li><a href="#">Title</a></li>
                <li><a href="#">Category</a></li>
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
		methods: {}
	}
</script>

<style>
    #sortBtn {
        margin-top: -20px;
    }
</style>
