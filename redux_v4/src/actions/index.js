export const SET_CITY = 'SET_CITY'; 
export const SET_WEATHER = 'SET_WEATHER';
export const ADD_CITY = 'ADD_CITY';

export function setCities(city) {
	return {
		type: SET_CITY,
		city
	};
};

export function addCity(city) {
	return {
		type: ADD_CITY,
		city
	};
}

export function setWeather(weather) {
	return {
		type: SET_WEATHER,
		weather
	};
}

  