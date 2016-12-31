import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => ({
    /* TBD */    
}))

class Sidebar extends Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
        <section className="customer-sidebar">
            <h4>TBD:</h4>
            <p>Expanded Desktop Menu?</p>
        </section>
    );
  }
}

export default Sidebar