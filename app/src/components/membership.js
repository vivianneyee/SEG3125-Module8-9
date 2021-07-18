import {React, useState} from 'react'
import {Form, Button, Toast} from 'react-bootstrap'
import './membership.css'
import ConfirmMessage from './confirmMessage'
import TooltipIcon from './images/tooltip-icon.png'
import {toast} from 'react-toastify'

function Membership() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  var isValid = false;
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("invalid")
    } else {
      isValid = true;
      notify();
      console.log("valid")
    }
      setValidated(true);
  };

  const notify = () => {
    if (isValid) {
      toast("Payment Successful! Check your email for your membership information")
    }
  }

  return(
    <div className="becomeMember" id="becomeMember">
      <div className="nav-space"/>
      <h1 className="pageTitle">Become a Member</h1>
      <div className="formContainer">
        <div className="formSection">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div class="personalInfo">
              <h3>Personal Information</h3>
              <div className="row">
                <Form.Group className="mb-3 col2">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control required type="text" />
                </Form.Group>
                <Form.Group className="mb-3 col2">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control required type="text"/>
                </Form.Group>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control required minlength="10" type="tel" placeholder="Phone number"/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control required type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address 2</Form.Label>
                <Form.Control type="text" placeholder="Apartment, Suite, or Unit" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control required type="text" />
              </Form.Group>
              <div className="row">
                <Form.Group className="mb-3 col2">
                  <Form.Label>Province</Form.Label>
                  <Form.Control required type="text"/>
                </Form.Group>
                <Form.Group className="mb-3 col2">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control required type="text"/>
                </Form.Group>
              </div>
            </div>

            <div className="paymentInfo">
              <h3>Payment</h3>
              <div className="totalPrice">
                <p>Membership Fee: $20.00</p>
                <p>First Month: $60:00</p>
                <p>Tax: $10.40</p>
                <p className="total">Total: $90.40</p>
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Card Number</Form.Label>
                <Form.Control required inputmode="numeric" pattern="[0-9\s]{13,19}" type="text" placeholder="xxxx xxxx xxxx xxxx"/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name on Card</Form.Label>
                <Form.Control required type="text" />
              </Form.Group>
              <div className="row">
                <Form.Group className="mb-3 col2">
                  <Form.Label>Expiration</Form.Label>
                  <Form.Control required type="text"/>
                </Form.Group>
                <Form.Group className="mb-3 col2">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control required type="number" maxlength="3" minlength="3"/>
                </Form.Group>
              </div>
              <Button type="submit" className="confirmBtn">Confirm Payment</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Membership
