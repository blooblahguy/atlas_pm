<template>
	<div class="tasks">
		<div v-for="task in tasks" v-bind:key="task.id">
			{{ task.title }} - 
			{{ task.description }} - 
			{{ task.complete }}
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			tasks: [
				{
					id: 1,
					title: 'Hello',
					description: 'This is what you need to do',
					complete: false,
				},
				{
					id: 2,
					title: 'Hello',
					description: 'This is what you need to do',
					complete: false,
				},
				{
					id: 3,
					title: 'Hello',
					description: 'This is what you need to do',
					complete: false,
				},
				{
					id: 4,
					title: 'Hello',
					description: 'This is what you need to do',
					complete: false,
				}
			]
		}
	},
	mounted () {
		// request tasks
	}
}
</script>

<style scoped>

</style>
