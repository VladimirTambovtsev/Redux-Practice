import React, { Component } from 'react';

import { connect } from 'react-redux';

import { createMem } from '../actions';

class MemeItem extends Component {

	constructor() {
		super();
		this.state = {
			hovered: false
		}
	}

	postMeme() {
		 
		 
 		const memeObj = {
			template_id: this.props.meme.id,
			text0: this.props.text0,
			text1: this.props.text1
		}
		console.log('memObj', memeObj);

		this.props.createMem(memeObj);
	}

	render() {
		const { url, name } = this.props.meme; 
		return(
			<div onMouseEnter={() => this.setState({ hovered: true })} 
				 onMouseLeave={() => this.setState({ hovered: false })} 
				 onClick={() => this.postMeme()}
				 className="meme-item">
				<img src={url} alt={name} className={this.state.hovered ? 'meme-img darken-img' : 'meme-img'} />
				<p className={this.state.hovered ? 'meme-text' : 'no-text'} >{name}</p>
			</div>
		)
	}
}

export default connect(null, { createMem })(MemeItem);



