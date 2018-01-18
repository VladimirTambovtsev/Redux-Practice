import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import characters_json from '../data/characters.json';


function createCharacter(id) {		// just a helper function
	let character = characters_json.find(character => character.id === id);
	return character;
}


function heroes(state = [], action) {
	switch(action.type) {
		case ADD_CHARACTER:
			let heroes = [...state, createCharacter(action.id)] 
			return heroes;
		case REMOVE_CHARACTER:
			heroes = state.filter(item => item.id !== action.id); // just add character in chracters list
			return heroes;
		default:
			return state;
	}
}


export default heroes;