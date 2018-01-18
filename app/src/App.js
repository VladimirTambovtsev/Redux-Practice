import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import './App.css';

import AgeStats from './AgeStats';

class App extends Component {

  constructor() {
    super();

    this.state = { 
      newDate: '',
      bday: '1999-23-02',
      showStats: false
    };
  }

  changeBirthday() {
    console.log(this.state.newDate);
    this.setState({ bday: this.state.newDate, showStats: true })
  }

  render() {
    return (
      <div className="App">
        <Form inline>
          <h2>Input Your Birthday!</h2>
          <FormControl onChange={event => this.setState({ newDate: event.target.value })}  type="date">
          </FormControl>
          <Button onClick={() => this.changeBirthday()}>
            Submit
          </Button>
           
            { this.state.showStats ? <div className="fade age-stats"><AgeStats date={this.state.bday} /></div> : null }
         
        </Form>
      </div>
    );
  }
}

export default App;
