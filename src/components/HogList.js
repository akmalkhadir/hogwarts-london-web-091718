import React, { Component } from 'react'
import Hog from './Hog'

class HogList extends Component {
  render () {
    const hogsToRender = this.props.filteredHogs.length > 0 ? this.props.filteredHogs : this.props.hogs
    return (
      <div>
        {
          hogsToRender.map(hog =>
            <Hog
              handleClick={this.props.selectHog}
              key={hog.name}
              hog={hog} />
          )
        }
      </div>
    )
  }
}

export default HogList
