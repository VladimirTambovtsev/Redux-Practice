import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RecipeItem from './RecipeItem';

class RecipeList extends Component {
	render() {
		console.log('this.props', this.props);
		return (
			<div>
				{ this.props.favouriteRecipes.length > 0 ? <h4><Link to="/favourites" className="btn link">Favourites</Link></h4> : null }
				 
				{this.props.recipes.map((recipe, index) => {
					return (<RecipeItem key={index} recipe={recipe} favouriteButton={true} />);
				})}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, null)(RecipeList);