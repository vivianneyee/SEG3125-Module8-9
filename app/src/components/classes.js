import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './classes.css'
import YogaClass from './images/yoga_class.jpeg'

export default class Classes extends React.Component {
  render() {
    return(
      <div className="classes" id="classes">
        <h1 className="pageTitle">Fitness Classes</h1>
        <div>
          <div className="row">
            <Card className="left-col">
              <Card.Img variant="top" src={YogaClass} className="classImage"/>
              <Card.Body>
                <Card.Title>Yoga</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}
