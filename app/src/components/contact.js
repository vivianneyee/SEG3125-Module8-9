import React, {useState} from 'react'
import {Modal, Button, Form, CloseButton} from 'react-bootstrap'
import {toast} from 'react-toastify'

function ContactUs(props) {
  const btnName = props.name
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      handleClose();
      console.log("valid")
    }
      setValidated(true);
  };

  const notify = () => {
    if (isValid) {
      toast("Message sent successfully. We'll get back to you as soon as we can.")
    }
  }

  return (
    <>
      <a className="contactUs" onClick={handleShow}>
        {btnName}
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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <p>Have a question or concern? Send a message to our staff and we'll get back to you as soon as we can.</p>
              <Form.Group className="mb-3">
                <Form.Label>Full Name:</Form.Label>
                <Form.Control required type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control required type="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message:</Form.Label>
                <Form.Control required as="textarea" rows={3} />
              </Form.Group>
              <Button className="confirmBtn" type="submit">Send Message</Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactUs
