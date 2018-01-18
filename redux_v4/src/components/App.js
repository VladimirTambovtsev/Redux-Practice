import React, { Component } from 'react';

import '../styles/index.css';
 
import Form from './Form';
import CardList from './CardList';

class App extends Component {
	render() {
		return(
			<div className="container section"> 


				<Form/>				

				<CardList />
			</div>
			 
		)
	}
}  

export default App;