import { combineReducers } from 'redux';
import { SET_CITY, SET_WEATHER, ADD_CITY } from '../actions';

function cities(state = [], action) {
	switch(action.type) {
		case SET_CITY: 
			return action.city;
		default:
			return state;
	}
}

function addCity(state = [], action) {
	switch(action.type) {
		case ADD_CITY:
			return state = [...state, action.city]
		default:
			return state;
	}
}


function weather(state = [], action) {
	switch(action.type) {
		case SET_WEATHER: 
			return action.weather;
		default:
			return state;
	}
}


const rootReducer = combineReducers({
	cities,
	weather
})

export default rootReducer;