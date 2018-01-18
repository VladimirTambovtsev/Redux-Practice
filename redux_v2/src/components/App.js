import React, { Component } from 'react';


import '../styles/App.css';

import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import FavouriteRecipes from './FavouriteRecipes'

class App extends Component {

	render() {
		return(
			<div>
				<h2>Recipe Finder</h2>
				<SearchRecipes/>
				<RecipeList /> 
			</div>
		);
	}
}

export default App;