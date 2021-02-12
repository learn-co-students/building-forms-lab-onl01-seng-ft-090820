// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  };

  handleOnChange = (e) => {
    this.setState({
      //[e.target.name]: e.target.value;
      name: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state);
  }
  render() {
    return(
      <div>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <label>
            Band Input:
            <input 
            name="text" 
            type="text"
            onChange={this.handleOnChange}
            />
            <button type="submit">Submit</button>
          </label>
        </form>
        
      </div>
    )
  }
}

export default BandInput
