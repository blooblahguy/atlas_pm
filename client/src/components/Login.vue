<template>
	<div class="login_page wrapper">
		<div class="content-center row">
			<div class="os-6">
				<h2 class="pad1 bg-primary text-center">Login</h2>

				<form action="#" class="text-left">
					<div class="formsec">
						<label for="">Email</label>
						<input type="email" name="email" required v-model="email" placeholder="Email...">
					</div>
					<div class="formsec">
						<label for="">Password</label>
						<input type="password" name="password" autcomplete="new-password" required v-model="password" placeholder="Password...">
					</div>
				</form>
				<div class="message-error margt2" v-if="error" v-html="error"></div>
				<div class="formsec pad2 text-center">
					<button @click="login">Login</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
	data() {
		return {
			email: '',
			password: '',
			error: null,
		}
	},
	methods: {
		async login() {
			this.error = null
			try {
				const response = await AuthenticationService.login({
					email: this.email,
					password: this.password
				})

				this.$store.dispatch('setToken', response.data.token)
				this.$store.dispatch('setUser', response.data.user)
			} catch(error) {
				this.error = error.response.data.error
			}
		}
	}
}
</script>

<style scoped>

</style>
