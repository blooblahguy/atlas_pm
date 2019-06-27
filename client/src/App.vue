<template>
  <div id="app">
	<page-header></page-header>
	<div class="body_wrapper">
		<div class="row">
			<div class="os-2 left" v-if="! $store.state.isUserLoggedIn">

			</div>
			<div class="os main pad2">
				<router-view/>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import PageHeader from "@/components/Header.vue"
export default {
  name: 'App',
  data () {
	  return {
		  logged_in: false
	  }
  },
  components: {
	  PageHeader
  }
}
</script>

<style>

</style>
