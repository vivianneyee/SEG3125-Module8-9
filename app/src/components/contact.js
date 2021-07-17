import React, {useState} from 'react'
import {Modal, Button, Form, CloseButton} from 'react-bootstrap'

function ContactUs() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="contactUs" onClick={handleShow}>
        Contact Us
      </a>

      <Modal
        show={show}
        onHide={handleClose}
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="contactForm">
            <Form>
              <p>Have a question or concern? Send a message to our staff and we'll get back to you as soon as we can.</p>
              <Form.Group className="mb-3">
                <Form.Label>Full Name:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <div>
              <Button className="confirmBtn" onClick={handleClose}>
                Send Message
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactUs
