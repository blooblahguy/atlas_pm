<template>
	<div class="content-center row">
		<div class="os-6">
			<h1 class="pad1 bg-primary text-center">Register</h1>

			<div class="text-left">
				<div class="formsec">
					<label for="">Email</label>
					<input type="email" name="email" v-model="email" placeholder="Email...">
				</div>
				<div class="formsec">
					<label for="">Password</label>
					<input type="password" name="password" v-model="password" placeholder="Password...">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"
export default {
  data () {
    return {
		email: '',
		password: '',
		error: null,
    }
  },
  methods: {
	  async register () {
		  try {
			await AuthenticationService.register({
				email: this.email,
				password: this.password
			})
			this.error = null
		  } catch (err) {
			this.error = err.response.data.error
		  }
	  }
  }
}
</script>

<style scoped>
	.error-message{ padding: 10px; color: red; }
</style>


