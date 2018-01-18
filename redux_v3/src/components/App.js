import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/App.css';

import { Form, FormGroup, FormControl, ControlLabel, Button  } from 'react-bootstrap';

import MemeItem from './MemeItem';
import MyMemes from './MyMemes';

class App extends Component {

	constructor() {
		super();

		this.state = {
			memeLimit: 10,
			text0: '',
			text1: ''
		}
	}

	render() {
		return(
			<div>
				<h2>Welcome to Meme Generator</h2>
				<h4><i>Write Some Text</i></h4>
				<MyMemes/>
				<Form inline>
					<FormGroup>
						<ControlLabel style={{fontWeight: '100'}}>
							Top
						</ControlLabel>
						<FormControl onChange={(e) => this.setState({ text0: e.target.value })} type="text" ></FormControl>
					</FormGroup>
						{' '}
					<FormGroup>
						<ControlLabel style={{fontWeight: '100'}}>
							Bottom
						</ControlLabel>
						<FormControl onChange={(e) => this.setState({ text1: e.target.value })} type="text" ></FormControl>
					</FormGroup>
				</Form>

				 
				{this.props.memes.slice(0, this.state.memeLimit).map((meme) => {
					return (
						<MemeItem 
							key={meme.id} meme={meme} 
							text0={this.state.text0} 
							text1={this.state.text1} />
					)
				})}

				<div onClick={() => this.setState({ memeLimit: this.state.memeLimit + 10 })} className="meme-btn">More Memes</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, null)(App);