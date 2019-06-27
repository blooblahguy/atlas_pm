<template>
  <div id="app">
	<page-header></page-header>
	<div class="body_wrapper">
		<div class="row">
			<div class="os-2 left bg-light-grey" v-if="$store.state.isUserLoggedIn">
				<page-sidebar></page-sidebar>
			</div>
			<div class="os main pad2">
				<router-view/>
			</div>
		</div>
	</div>
	<page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from "@/components/Header.vue"
import PageSidebar from "@/components/Sidebar.vue"
import PageFooter from "@/components/Footer.vue"
export default {
  name: 'App',
  data: {},
  components: {
	  PageHeader,
	  PageSidebar,
	  PageFooter
  }
}
</script>

<style>

</style>
