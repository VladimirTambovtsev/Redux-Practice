export const SET_RECIPES = 'SET_RECIPES';
export const GET_RECIPES = 'GET_RECIPES';


export function setRecipes(items) {
	return {
		type: SET_RECIPES,
		items
	};
}

export function getRecipes(recipe) {
	return {
		type: GET_RECIPES,
		recipe
	}
}