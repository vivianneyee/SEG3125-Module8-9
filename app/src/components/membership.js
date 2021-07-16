import React from 'react'
import {Form, Button} from 'react-bootstrap'
import './membership.css'


export default class Membership extends React.Component {
  render() {
    return(
      <div className="becomeMember" id="becomeMember">
        <div className="nav-space"/>
        <h1 className="pageTitle">Become a Member</h1>
        <div className="formContainer">
          <div className="formSection">
            <h3>Personal Information</h3>
            <div class="personalInfo">
              <Form>
                <div className="row">
                  <Form.Group className="mb-3 col2">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3 col2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Password" />
                  </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="phone" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control type="text" placeholder="Apartment, Suite, or Unit" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <div className="row">
                  <Form.Group className="mb-3 col2">
                    <Form.Label>Province</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                  <Form.Group className="mb-3 col2">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                </div>
              </Form>
            </div>
          </div>

          <div className="formSection">
            <h3>Payment</h3>
            <div className="totalPrice">
              <p>Membership Fee: $20.00</p>
              <p>First Month: $60:00</p>
              <p>Tax: $10.40</p>
              <p className="total">Total: $90.40</p>
            </div>
            <div className="paymentInfo">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="text" placeholder="xxxx - xxxx - xxxx - xxxx" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Name on Card</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <div className="row">
                  <Form.Group className="mb-3 col2">
                    <Form.Label>Expiration</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                  <Form.Group className="mb-3 col2">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                </div>
              </Form>
              <div>
                <Button className="confirmBtn">
                  Confirm Payment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
