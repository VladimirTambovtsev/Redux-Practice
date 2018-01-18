import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearhRecipes extends Component {

	constructor() {
		super();

		this.state = {
			ingredients: '',
			dish: ''
		}
	}

	searchFetch() {
		let { ingredients, dish } = this.state;
		const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
		fetch(url, {
			method: 'GET'
		})
		.then(res => res.json())
		.then(json => {
			this.props.setRecipes(json.results);
		});
	}

	render(){
		return (
			<Form inline>
				<FormGroup>
					<ControlLabel> Ingredients</ControlLabel>
					<FormControl onChange={e => this.setState({ ingredients: e.target.value })} type="text" placeholder="garlic, chicken and other.." />
				</FormGroup>


				<FormGroup>
					<ControlLabel> Dish</ControlLabel>
					<FormControl onChange={e => this.setState({ dish: e.target.value })} type="text" placeholder="adobo" />
				</FormGroup>
				<Button onClick={() => this.searchFetch()}>Submit</Button>
			</Form>
		);
	}
}

// function mapStateToProps(state) {
// 	return {
// 		state: state.dish
// 	}
// }

export default connect( null, { setRecipes } )(SearhRecipes);

