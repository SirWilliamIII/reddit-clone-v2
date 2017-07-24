<template>
    <div id="header">
        <ul class="nav nav-pills" id="routeBtns">
            <router-link to="/" tag="li" active-class="active" exact><a>{{ home }}</a></router-link>
            <router-link to="/posts" tag="li" active-class="active"><a>{{ posts }}</a></router-link>
            <router-link to="/createpost" tag="li" active-class="active"><a>{{ createpost }}</a></router-link>
        </ul>
    </div>
</template>

<script>
	export default {
		name:    'header',
		data() {
			return {
				home: 'Home',
                posts: 'Posts',
                createpost: 'Create Post'
            }
		}
	}
</script>

<style>
    #routeBtns {
        margin: 10px 0px 50px 0px;
    }
</style>
