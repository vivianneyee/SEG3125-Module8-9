import {React, useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import {toast} from 'react-toastify'

function Register(props) {
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
      toast("Registration successful!")
    }
  }

  const classType = props.name;

  const classSchedules = [
    {
      name: "yoga",
      monday: "06:00 - 07:00 Instructor: Jenny",
      tuesday: "10:00 - 11:00 Instructor: Jenny",
      wednesday: "08:00 - 09:00 Instructor: Andrea",
      thursday: "12:00 - 13:00 Instructor: Andrea",
      friday: "18:00 - 19:00 Instructor: Jenny",
      saturday: "12:00 - 13:00 Instructor: Andrea",
      sunday: "08:00 - 09:00 Instructor: Andrea"
    },
    {
      name: "kickboxing",
      monday: "18:00 - 19:00 Instructor: Marcus",
      tuesday: "18:00 - 19:00 Instructor: Marcus",
      wednesday: "14:00 - 15:00 Instructor: Liam",
      thursday: "18:00 - 19:00 Instructor: Marcus",
      friday: "18:00 - 19:00 Instructor: Liam",
      saturday: "14:00 - 15:00 Instructor: Liam",
      sunday: "10:00 - 11:00 Instructor: Liam"
    },
    {
      name: "strength",
      monday: "13:00 - 14:00 Instructor: James",
      tuesday: "17:00 - 18:00 Instructor: Liam",
      wednesday: "13:00 - 14:00 Instructor: James",
      thursday: "18:00 - 19:00 Instructor: James",
      friday: "17:00 - 18:00 Instructor: Liam",
      saturday: "09:00 - 10:00 Instructor: Liam",
      sunday: "09:00 - 10:00 Instructor: Liam"
    },
    {
      name: "spin",
      monday: "07:00 - 08:00 Instructor: Jenny",
      tuesday: "07:00 - 08:00 Instructor: Jenny",
      wednesday: "07:00 - 08:00 Instructor: Maria",
      thursday: "07:00 - 08:00 Instructor: Maria",
      friday: "07:00 - 08:00 Instructor: Maria",
      saturday: "09:00 - 10:00 Instructor: Maria",
      sunday: "09:00 - 20:00 Instructor: Jenny"
    }
  ];

  var monday = ""
  var tuesday = ""
  var wednesday = ""
  var thursday = ""
  var friday = ""
  var saturday = ""
  var sunday = ""
  for (let i = 0; i < classSchedules.length; i++) {
    if (classType === classSchedules[i].name) {
      monday = classSchedules[i].monday;
      tuesday = classSchedules[i].tuesday;
      wednesday = classSchedules[i].wednesday;
      thursday = classSchedules[i].thursday;
      friday = classSchedules[i].friday;
      saturday = classSchedules[i].saturday;
      sunday = classSchedules[i].sunday;
    }
  }

  return (
    <div>
      <Button className="registerBtn" onClick={handleShow}>Register</Button>
      <Modal
        show={show}
        onHide={handleClose}
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="registerForm">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <label for="classSelect" className="selectLabel">Select a Time</label>
              <select className="mb-3" id="classSelect">
                <option>Monday: {monday}</option>
                <option>Tuesday: {tuesday}</option>
                <option>Wednesday: {wednesday}</option>
                <option>Thursday: {thursday}</option>
                <option>Friday: {friday}</option>
                <option>Saturday: {saturday}</option>
                <option>Sunday: {sunday}</option>
              </select>
              <Form.Group className="mb-3">
                <Form.Label>Member ID</Form.Label>
                <Form.Control required type="text" />
              </Form.Group>
              <Button className="confirmBtn" type="submit">Register</Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Register
