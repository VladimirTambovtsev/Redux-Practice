import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';


class CharacterList extends Component {

	render() {
		console.log('this.props', this.props);
		return(
			<div>
				<h4>CharacterList</h4>
				<ul className="list-group">
					{this.props.characters.map(({ id, name }) => {
						return (
							<li key={id} className="list-group-item">
								<div className="list-item">{name}</div>
								<div onClick={() => this.props.addCharacterById(id)} className="list-item right-button">+</div>
							</li>
						);
					})}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {			// push objects from store to props in component
	console.log('state', state);
	return {
		characters: state.characters
	};
}

// function mapDispatchToProps(dispatch) {		// push addCharacterById Action to props in component
// 	return bindActionCreators({ addCharacterById }, dispatch)
// }

export default connect(mapStateToProps, { addCharacterById })(CharacterList);