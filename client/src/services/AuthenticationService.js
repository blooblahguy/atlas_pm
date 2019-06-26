import Api from '@/services/Api'

export default {
	register (credentials) {
		return Api().post('register', credentials)
	}
}

// how you'd use it
// AuthenticationService.register({
// 	email: 'testing@gmail.com',
// 	password: '123456'
// })