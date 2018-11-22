import React from 'react'
import {Card, Button} from 'semantic-ui-react'

const HogDetails = (props) => {
    return (
        <div>
        <Card
        image='https://media.giphy.com/media/a50eFx1uBCEKs/giphy.gif' 
        header={props.selectedHog.name}
        meta={props.selectedHog.specialty}
        />
        <Button onClick = {props.deselectHog} > Deselect Hog </Button>
        </div>
    )
}

export default HogDetails