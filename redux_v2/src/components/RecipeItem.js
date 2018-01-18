import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRecipes } from '../actions';

class RecipeItem extends Component {

	constructor(props){
		super(props);

		this.state = {
			favorited: false
		}
	}

	favourite(recipe) {

		this.props.getRecipes(recipe);
		this.setState({ favorited: true });

		console.log('favorited', this.state.favorited);
	}

	render() {

		let { recipe } = this.props
		console.log('props', this.props);
		return (
			<div className="recipe-item">
				{
					this.props.favouriteButton ? 
						this.state.favorited ? <div className="star">&#9733;</div> : <div className="star " onClick={() => this.favourite(recipe)}>&#9734;</div> 
					: <div></div>
				}
				<div className="recipe-text">
					<a href={recipe.href}><h4 className="recipe-text">{recipe.title}</h4></a>
					<p>{recipe.ingredients}</p>
					<img src={recipe.thumbnail} alt={recipe.title} className="recipe-img" />
				</div>
			</div>
		);
	}
}

export default connect(null, { getRecipes })(RecipeItem);


