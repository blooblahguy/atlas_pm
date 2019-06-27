<template>
	<div class="header_outer bg-black pad2">
		<div class="row content-middle">
			<div class="os-3">
				<router-link to="/" class="logo display-block strong">Atlas Project Managment</router-link>
			</div>
			<div class="os text-right">
				<ul class="nolist marg0 top_menu" v-if="! $store.state.isUserLoggedIn">
					<li>
						<router-link to="register">Register</router-link>
					</li>
					<li>
						<router-link to="login">Login</router-link>
					</li>
				</ul>

				<ul class="nolist marg0 top_menu" v-if="$store.state.isUserLoggedIn">
					<li>
						<a href="" @click="logout">Logout</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		logout() {
			this.$store.dispatch("setToken", null)
			this.$store.dispatch("setUser", null)
			this.$router.push({
				name: "root"
			})
		}
	}
}
</script>

<style scoped>
	.top_menu li {display:inline-block; margin-left: 5px }
	.top_menu a {padding: 4px 10px;}
</style>
