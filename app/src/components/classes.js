import React from 'react'
import {Card, Button, Modal} from 'react-bootstrap'
import './classes.css'
import YogaClass from './images/yoga_class.jpeg'
import CalendarIcon from './images/calendar_icon.png'

export default class Classes extends React.Component {
  render() {
    return(
      <div className="classes" id="classes">
        <h1 className="pageTitle">Fitness Classes</h1>
        <div>
          <div className="row">
            <div className="left-col">
              <Card className="class-card">
                <Card.Img variant="top" src={YogaClass} className="classImage"/>
                <Card.Body>
                  <Card.Title>Yoga</Card.Title>
                  <Card.Text>
                    Make yoga and meditation part of your daily life.
                  </Card.Text>
                  <div className="schedule">
                    <img src={CalendarIcon}/>
                    <span>See Schedule</span>
                  </div>
                  <Button className="registerBtn">Register</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="right-col">
              <Card className="class-card">
                <Card.Img variant="top" src={YogaClass} className="classImage"/>
                <Card.Body>
                  <Card.Title>Yoga</Card.Title>
                  <Card.Text>
                    Make yoga and meditation part of your daily life.
                  </Card.Text>
                  <div className="schedule">
                    <img src={CalendarIcon}/>
                    <span>See Schedule</span>
                  </div>
                  <Button className="registerBtn">Register</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
