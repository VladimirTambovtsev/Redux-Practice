import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import RecipeItem from './RecipeItem';

class FavouriteRecipes extends Component {

	render() {
		return(
			<div>
				<h4>FavouriteRecipes</h4>
				<h4><Link to="/" className="btn link">Home</Link></h4>
				{this.props.favouriteRecipes.map((recipe, index) => {
					return (
						<RecipeItem key={index} recipe={recipe} />
					)
				})}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		favouriteRecipes: state.favouriteRecipes
	}
}

export default connect(mapStateToProps, null)(FavouriteRecipes);