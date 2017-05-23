<template>
	<div id="app">
		<toobar></toobar>
		<nodelist></nodelist>
		<editer></editer>
	</div>
</template>
<style>
	
</style>
<script>
	import toobar from './components/Toobar.vue'
	import nodelist from './components/Nodelist.vue'
	import editer from './components/Editer.vue'
	export default {
		components: {
		   toobar,
		   nodelist,
		   editer
		}
	}
</script>