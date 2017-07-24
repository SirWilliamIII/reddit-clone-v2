<template>
    <div>
        <form class="form-inline">
            <div class="form-group">
                <button @click="counter++" class="btn btn-xs btn-danger" type="button">Dislike</button>
                <p>{{ counter }}</p>
                <button @click="counter--" class="btn btn-xs btn-primary" type="button">Like</button>
            </div>
        </form>
    </div>
</template>

<script>
	export default {
		name:    '',
		data() {
			return {
				counter: 0
            }
		},
		methods: {
			addOne (a) {
                a++
            },
            subtractOne(a) {
                a--
            }
        }
	}
</script>

<style>

</style>
