import React, { Component } from 'react'

class Test extends Component {
  
    state = { search: '' }

    handleChange = event => {
        this.setState({
            search: event.target.value
          })
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          
        }, 250);
      }
    render() {
      return (
        <div>
          <input type="text" value={this.state.search} onChange={this.handleChange} />
          {this.state.search ? <p>Search for: {this.state.search}</p> : null}
        </div>
      )
    }
  }

  export default Test;