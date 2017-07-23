<template>
    <div id="header">
        <ul class="nav nav-pills">
            <router-link to="/" tag="li" active-class="active" exact><a>{{ home }}</a></router-link>
            <router-link to="/posts" tag="li" active-class="active"><a>{{ posts }}</a></router-link>
        </ul>
    </div>
</template>

<script>
	export default {
		name:    'header',
		data() {
			return {
				home: 'Home',
                posts: 'Posts'
            }
		}
	}
</script>

<style>
</style>
