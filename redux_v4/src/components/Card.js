import React, { Component } from 'react';

class Card extends Component {
 
	render() { 
		console.log('Card props: ', this.props.city);

		return(
			<div className="col s12">
				<div className="col s3">
					<div className="row">
				    	<div className="col s12 m4">
				          <div className="card ">
				            <div className="card-content ">
				              <span className="card-title">{this.props.city}</span>
				              <div className="card-icon-arrow">x</div>
				              <div className="card-container">
					              <img className="card-img" src="data:image/png;base64,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" alt=""/>
					              <span className="card-text">{this.props.temperature} °C</span>
				              </div>
				               <p className="card-subtitle">Ветер: {this.props.wind}м/с</p>
				               <p className="card-subtitle">Давление: {this.props.pressure} мм</p>
				            </div>
				          </div>
				        </div>
				    </div>
				</div>
			</div>
		)
	}
}

export default Card;

