import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import Card from './Card';

class CardList extends Component {
	render() {
		console.log('CardList state', this.state);
		console.log('CardList props', this.props.weather.temp_c);
		
		
 
		return (
			<div>    
				<Card city={this.props.city.name} 
					  wind={this.props.weather.wind_kph} 
					  pressure={this.props.weather.pressure_mb}
					  temperature={this.props.weather.temp_c} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		city: state.cities,
		weather: state.weather
	}
}

export default connect(mapStateToProps, null)(CardList);