import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions';

class HeroList extends Component {

	render() {
		console.log(this.props.heroes)
		return (
			<div>
				<h4>Your Squad:</h4>
				<ul className="list-group">
					{this.props.heroes.map(({id, name}) => {
						return (
							<li key={id} className="list-group-item">
								<div className="list-item">{name}</div>
								<div className="list-item right-button" onClick={() => this.props.removeCharacterById(id)}>X</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		heroes: state.heroes
	}
}



export default connect(mapStateToProps, { removeCharacterById })(HeroList);