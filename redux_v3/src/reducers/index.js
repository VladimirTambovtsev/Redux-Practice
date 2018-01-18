import { combineReducers } from 'redux';
import { RECEIVE_MEMES, NEW_MEME } from '../actions';

function memes(state = [], action) {
	switch(action.type) {
		default:
			return state;
		case RECEIVE_MEMES:
			return action.memes; 
	}
}

function myMemes(state = [], action) {
	switch(action.type) {
		default:
			return state;
		case NEW_MEME:
			state = [...state, action.meme]
			return state;
	}
}

const rootReducer = combineReducers({
	memes,
	myMemes
})

export default rootReducer;