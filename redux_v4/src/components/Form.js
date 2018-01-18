import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setCities, setWeather, addCity } from '../actions';

class Form extends Component {

	constructor() {
		super();

		this.state = {
			city: '',
			notFound: false
		}
	}

	searchFetch(e) {
		e.preventDefault();
		let { city } = this.state;
		if (city.length > 2) {
			const url = `https://api.apixu.com/v1/current.json?key=91f54d73050a42b18b3215816181201&q=${city}`;
			fetch(url, {
				method: 'GET'
			})
			.then(res => res.json())
			.then(json => {
				this.props.setCities(json.location);
				this.props.setWeather(json.current);
				this.props.addCity(json.current);
				this.setState({ notFound: false });
			})
			.catch(err => {
				console.log(err);
				this.setState({ notFound: true });
			})
		}
		console.log(this.state);
		// .then(json => {
		// 	this.props.setWeather(json.current);
		// })
	}

	render() {
		return(
			<form onSubmit={this.searchFetch.bind(this)} className="row">
					<div className="col s12">
						<div className="col s6" > 
							<h4>Weather API</h4>
							<input onChange={e => this.setState({ city: e.target.value })} type="text" placeholder="Moscow"/>
						</div>
					
						<div style={{paddingTop: '80px'}}> 
							<button type="submit" className="btn col s1 btn-plus">+ </button>	 
						</div>
						 
						<div className="range-field col s4">
							<div style={{ marginLeft: '30px'}}> 
								<input type="range" id="test5" min="0" max="100" />
							</div>
						</div>
					</div>
					{ this.state.notFound ? <div className="col s12"><div className="col s11">Ничего не найдено</div></div> : null } 
			</form>
		)
	}
}


export default connect(null, { setCities, setWeather, addCity })(Form);