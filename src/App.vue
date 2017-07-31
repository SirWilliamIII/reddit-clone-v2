<template>
    <div>
        <div class="container-fluid">
            <div class="row content">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                    <Paneling/>
                </div>
                <div class="offset-xs-2 col-sm-8 offset-sm-2 col-md-4 col-lg-6" id="main-content">
                    <Header/>
                    <router-view></router-view>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-3 offset-md-4 col-lg-3">
                    <Paneling/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
	import Paneling from './components/Paneling.vue'
	import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
	export default {
		components: {
			Header, Paneling, Footer
		},
		methods:    {
			submit() {
				this.$http.post('https://vue-http-f2d29.firebaseio.com/data.json', this.posts)
					.then(response => {
						console.log(response)
					}, error => {
						console.log('Not working', error)
					})
			}
		}
	}
</script>

<style>
    #main-content {
        margin-top: 30px;
    }

    .content {
        margin-top: 50px;
    }

    .jumbotron {
        background: rgba(0, 56, 122, 0.2);
    }
</style>
