import React from 'react'
import { Card } from 'semantic-ui-react'

const Hog = (props) => {
  return (
    <Card
      onClick={() => props.handleClick(props.hog)}
      image='https://media.giphy.com/media/a50eFx1uBCEKs/giphy.gif'
      header={props.hog.name}
    />
  )
}

export default Hog
