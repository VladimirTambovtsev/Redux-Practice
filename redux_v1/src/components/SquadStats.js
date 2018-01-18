import React, { Component } from 'react';
import { connect } from 'react-redux';


class SquadStats extends Component {

	renderStrength() {
		let strength = 0;
		this.props.heroes.forEach(hero => strength += hero.strength);
		return strength;
	}

	renderSpeed() {
		let speed = 0;
		this.props.heroes.forEach(hero => speed += hero.speed);
		return speed
	}

	renderIntelligence() {
		let intelligence = 0;
		this.props.heroes.forEach(hero => intelligence += hero.intelligence);
		return intelligence
	}

	render() {
		console.log(this.props.heroes)
		return (
			<div>
				<h4>SquadStats</h4>
				<ul className="list-group">
					<li className="list-group-item">
						<b>Overall Strength:</b> {this.renderStrength()}
					</li>
					<li className="list-group-item">
						<b>Overall Speed:</b> {this.renderSpeed()}
					</li>
					<li className="list-group-item">
						<b>Overall Intelligence:</b> {this.renderIntelligence()}
					</li>
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

export default connect(mapStateToProps, null)(SquadStats);