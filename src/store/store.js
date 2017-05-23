import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
	notes:[],
  	activeNote: {}
}

var mutations = {
	addNote(state){
		const newNote = {
			text:"new note",
			favorite:false
		}
		state.notes.push(newNote);
		state.activeNote = newNote;
	},
	toggleFavorite(state){
		state.activeNote.favorite = !state.activeNote.favorite
	},
	updataActiveNote(state,v){
		//alert(1) 
		state.activeNote = v
	},
	editNote(state,text){
		state.activeNote.text = text
	},
	deleteNote(state){
		state.notes.forEach(function(note,i){
		    note==state.activeNote && state.notes.splice(i,1);
		})
		state.activeNote = state.notes[0]
	}
}
const getters = {
	notes:state=> {
		return state.notes;
	},
	activeNote:state=> {
		return state.activeNote;
	}
};


const actions = {
	addNote({commit}){
		commit('addNote')
	},
	toggleFavorite({commit}){
		commit('toggleFavorite')
	},
	updataActiveNote({commit},v){
		commit('updataActiveNote', v)
	},
	editNote({commit},e){
		commit('editNote', e.target.value)
	},
	deleteNote({commit}){
		commit('deleteNote')
	}
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
