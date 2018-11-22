import React, { Component } from 'react'
import Hog from './Hog'

class HogList extends Component {

    state = {
        hogs: this.props.hogs
    }

  render () {
    return(
    <div>
      {
        this.state.hogs.map(hog => 
          <Hog
          handleClick={this.props.selectHog}
          key={hog.name}
          hog={hog} />
          )
      }
    </div>
    )}
}

export default HogList
