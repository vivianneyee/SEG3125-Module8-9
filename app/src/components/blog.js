import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './blog.css'
import AbWorkout from './images/abworkout.jpeg'
import TwoWeekShred from './images/2weekchallenge.jpeg'
import HomeWorkout from './images/homeworkout.png'
import Hiit from './images/hiit.jpeg'
import LemonChicken from './images/lemon-chicken.jpeg'
import SelfCare from './images/self-care.jpeg'
import SummerDrinks from './images/summer-drinks.jpeg'

export default class Blog extends React.Component {
  render() {
    return(
      <div className="blog" id="blog">
        <div className="nav-space"></div>
        <h1 className="pageTitle">Blog</h1>
        <div className="workouts">
          <h2>Workouts</h2>
          <div className="articles">
            <Card className="article">
              <Card.Img variant="top" src={TwoWeekShred} />
              <Card.Body>
                <Card.Title>Chloe Ting 2 Weeks Shred</Card.Title>
                <a className="article-link" href="https://www.chloeting.com/program/2019/two-weeks-shred-challenge.html">Read More</a>
              </Card.Body>
            </Card>
            <Card className="article">
              <Card.Img variant="top" src={HomeWorkout} />
              <Card.Body>
                <Card.Title>Full Body Home Workout for Beginners</Card.Title>
                <a className="article-link" href="https://www.verywellfit.com/best-home-workouts-3495490">Read More</a>
              </Card.Body>
            </Card>
            <Card className="article">
              <Card.Img variant="top" src={Hiit} />
              <Card.Body>
                <Card.Title>12-Minute Outdoor HIIT Workout</Card.Title>
                <a className="article-link" href="https://www.self.com/gallery/outdoor-hiit-workout">Read More</a>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="workouts">
          <h2>Lifestyle</h2>
          <div className="articles">
            <Card className="article">
              <Card.Img variant="top" src={LemonChicken} />
              <Card.Body>
                <Card.Title>Healthy Lemon Chicken Recipe</Card.Title>
                <a className="article-link" href="https://www.delicious.com.au/recipes/lemon-chicken-recipe/bp64ess3?r=recipes/collections/1vo4q819">Read More</a>
              </Card.Body>
            </Card>
            <Card className="article">
              <Card.Img variant="top" src={SelfCare} />
              <Card.Body>
                <Card.Title>30-Day Self Care Challenge</Card.Title>
                <a className="article-link" href="https://healthyhappyimpactful.com/30-day-self-care-challenge/">Read More</a>
              </Card.Body>
            </Card>
            <Card className="article">
              <Card.Img variant="top" src={SummerDrinks} />
              <Card.Body>
                <Card.Title>Healthy Summer Drink Recipes</Card.Title>
                <a className="article-link" href="https://www.eatingwell.com/recipes/19805/seasonal/summer/drinks/">Read More</a>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}
