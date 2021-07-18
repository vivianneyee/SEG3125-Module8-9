import React from 'react'
import LocationIcon from './images/location_icon.png'
import GymImage from './images/gym_image2.jpeg'
import Button from 'react-bootstrap/Button'
import './home.css'

export default class Home extends React.Component {
  render() {
    return(
      <div className="home" id="home">
        <div className="gymInfo">
          <div className="gymInfoText">
            <h2>Start your fitness journey today!</h2>
            <span className="address">
              <img src={LocationIcon}/>
              <p>34 Murray St. Ottawa ON</p>
            </span>
            <Button className="memberBtn" href="#becomeMember">Become a Member</Button>
          </div>
        </div>
        <div className="gymPhoto">
          <img src={GymImage}/>
        </div>
      </div>
    )
  }
}
