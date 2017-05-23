<template>
	<div id="notes-list">

    <div id="list-header">
      <h2>Notes | coligo</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
			@click="show='all'"
			:class="{active:show=='all'}">
            All Notes
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
        	@click="show='favorite'"
			:class="{active:show=='favorite'}"> 
            Favorites
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group" @clcik="updataActiveNote" v-for="v in filteredNotes">
        <a 
          class="list-group-item:true" href="#"
        
          <h4 class="list-group-item-heading" :class="{active:activeNote==v}" @click="updataActiveNote(v)"  style="text-align: center;">
          	{{v.text.trim().substring(0,30)}}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default {
		data(){
			return {
				show:'all'
			}
		},
		computed:{
			...mapGetters([
				'notes',
				'activeNote'
			]),
			filteredNotes () {
		      if (this.show === 'all'){
		        return this.notes
		      } else if (this.show == 'favorite') {
		        return this.notes.filter(notes => notes.favorite)
		      }
		    }
		},
		methods:{
			...mapActions([
				'updataActiveNote'
			])
		}
		
	}
</script>

<style>
	.active{
		background: skyblue;
	}
</style>