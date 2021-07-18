import React from 'react'
import LocationIcon from './images/location_icon.png'
import GymImage from './images/gym_image2.jpeg'
import Button from 'react-bootstrap/Button'
import './home.css'
import {FormattedMessage} from 'react-intl'

function Home(props) {
  const homeStrings = [
    {
      lang: "en",
      header: "Start your fitness journey today!",
      address: "34 Murray St. Ottawa ON",
      btn: "Become a Member"
    },
    {
      lang: "fr",
      header: "Commencez votre parcours de remise en forme aujourd'hui !",
      address: "34 Rue Murray Ottawa ON",
      btn: "Devenir membre"
    }
  ]
  return(
    <div className="home" id="home">
      <div className="gymInfo">
        <div className="gymInfoText">
          <h2>
            <FormattedMessage
              id="Home.message"
              defaultMessage="Start your fitness journey today!"
            />
          </h2>
          <span className="address">
            <img src={LocationIcon}/>
            <p>
              <FormattedMessage
                id="Home.address"
                defaultMessage="34 Murray St. Ottawa ON"
              />
            </p>
          </span>
          <Button className="memberBtn" href="#becomeMember">
            <FormattedMessage
              id="Home.btn"
              defaultMessage="Become a Member"
            />
          </Button>
        </div>
      </div>
      <div className="gymPhoto">
        <img src={GymImage}/>
      </div>
    </div>
  )
}

export default Home
