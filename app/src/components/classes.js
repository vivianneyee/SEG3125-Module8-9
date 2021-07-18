import React from 'react'
import {Card, Button, Modal} from 'react-bootstrap'
import './classes.css'
import YogaClass from './images/yoga_class.jpeg'
import KBClass from './images/kickboxing_class.jpeg'
import STClass from './images/strength_training.jpeg'
import SpinClass from './images/spin_class.jpeg'
import CalendarIcon from './images/calendar_icon.png'
import Schedule from './schedule'
import Register from './register'

export default class Classes extends React.Component {
  render() {
    return(
      <div className="classes" id="classes">
        <div className="nav-space"></div>
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
                  <Schedule name="yoga"/>
                  <a href="#becomeMember" className="registerBtn">Register</a>
                </Card.Body>
              </Card>
            </div>

            <div className="right-col">
              <Card className="class-card">
                <Card.Img variant="top" src={KBClass} className="classImage"/>
                <Card.Body>
                  <Card.Title>Kickboxing</Card.Title>
                  <Card.Text>
                    Get a full body workout while learning real self-defense skills.
                  </Card.Text>
                  <Schedule name="kickboxing"/>
                  <a href="#becomeMember" className="registerBtn">Register</a>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="left-col">
              <Card className="class-card">
                <Card.Img variant="top" src={STClass} className="classImage"/>
                <Card.Body>
                  <Card.Title>Strength Training</Card.Title>
                  <Card.Text>
                    Build strength, get lean and toned, and develop coordination and balance
                  </Card.Text>
                  <Schedule name="strength"/>
                  <a href="#becomeMember" className="registerBtn">Register</a>
                </Card.Body>
              </Card>
            </div>

            <div className="right-col">
              <Card className="class-card">
                <Card.Img variant="top" src={SpinClass} className="classImage"/>
                <Card.Body>
                  <Card.Title>Spin</Card.Title>
                  <Card.Text>
                    Build power and endurance with this indoor cycling class designed for all fitness levels
                  </Card.Text>
                  <Schedule name="spin"/>
                  <Register name="spin"/>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
