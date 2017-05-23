<template>
	<div id="note-editor">
    <textarea class="form-control" :value="activeNote.text" 　@input="editNote">
    </textarea>
  </div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default {
		computed:mapGetters([
			'notes',
			'activeNote'
		]),
		methods:mapActions([
			'editNote'
		])
	}
</script>

<style>
</style>