import React, { Component } from 'react'
import logo from './logo.png';
import './homepage.scss';

export class homepage extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <form onSubmit={this.handleSubmit}>
                <label>Enter Your Name </label>              
                <input type="name" className="UserInput" value={this.state.value} onChange={this.handleChange}/>
                <button type="submit" label="Enter" className="button" value='Submit'>
                  <span>Enter</span>
                </button>
              </form>

            </header>
          </div>
        )
    }
}

export default homepage;
