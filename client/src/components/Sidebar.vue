<template>
	<div class="sidebar_nav" v-if="$store.state.isUserLoggedIn">
		<router-link to="inbox">Inbox</router-link>
		<router-link to="projects">Projects</router-link>
		<router-link to="tasks">Tasks</router-link>
		<router-link to="clients">Clients</router-link>
	</div>
</template>


<script>
export default {
	
}
</script>


<style scoped>
	.sidebar_nav {height: calc(100vh - 117px)}
	.sidebar_nav a {display:block; padding: 10px 14px;}
	.sidebar_nav a.router-link-active {background: #ddd;}
</style>
