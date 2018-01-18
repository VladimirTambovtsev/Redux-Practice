import { combineReducers } from 'redux';

import { SET_RECIPES, GET_RECIPES } from '../actions';

function recipes(state = [], action) {
	switch(action.type) {
		case SET_RECIPES:
			return action.items;
		default:
			return state;
	}
}

function favouriteRecipes(state = [], action) {
	switch(action.type) {
		case GET_RECIPES:
			return state = [...state, action.recipe]
		default:
			return state;
	}
}


const rootReducer = combineReducers({
	recipes,
	favouriteRecipes
});

export default rootReducer;