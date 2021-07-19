import React from 'react'
import LocationIcon from './images/location_icon.png'
import GymImage from './images/gym_image2.jpeg'
import Button from 'react-bootstrap/Button'
import './home.css'
import { useTranslation } from 'react-i18next';

function Home() {
  const {t,i18n} = useTranslation();
  return(
    <div className="home" id="home">
      <div className="gymInfo">
        <div className="gymInfoText">
          <h2>{t("home-header")}
          </h2>
          <span className="address">
            <img src={LocationIcon}/>
            <p>
              {t('home-address')}
            </p>
          </span>
          <Button className="memberBtn" href="#becomeMember">
            {t('become-member')}
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
