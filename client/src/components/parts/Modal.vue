<template>
	<div class="modal">
		<a href="#" class="modal_bg"></a>
		<div class="modal_body">
			<h1 class="title">{{title}}</h1>
			<slot>Modal content not defined</slot>
		</div>
		<a href="#" class="modal_close"></a>
	</div>
</template>


<script>
export default {
	props: [
		'title'
	]
}
</script>


<style scoped>

</style>
