import React, {useState} from 'react'
import {Modal, Button, Table, CloseButton} from 'react-bootstrap'
import CalendarIcon from './images/calendar_icon.png'

function Schedule(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const classType = props.name;
  const classSchedules = [
    {
      name: "yoga",
      monday: "06:00 - 07:00 Instructor: Jenny",
      tuesday: "10:00 - 11:00 Instructor: Jenny",
      wednesday: "08:00 - 09:00 Instructor: Andrea",
      thursday: "",
      friday: "18:00 - 19:00 Instructor: Jenny",
      saturday: "12:00 - 13:00 Instructor: Andrea",
      sunday: "08:00 - 09:00 Instructor: Andrea"
    },
    {
      name: "kickboxing",
      monday: "",
      tuesday: "18:00 - 19:00 Instructor: Marcus",
      wednesday: "",
      thursday: "18:00 - 19:00 Instructor: Marcus",
      friday: "18:00 - 19:00 Instructor: Liam",
      saturday: "14:00 - 15:00 Instructor: Liam",
      sunday: ""
    },
    {
      name: "strength",
      monday: "13:00 - 14:00 Instructor: James",
      tuesday: "",
      wednesday: "13:00 - 14:00 Instructor: James",
      thursday: "",
      friday: "17:00 - 18:00 Instructor: Liam",
      saturday: "09:00 - 10:00 Instructor: Liam",
      sunday: ""
    },
    {
      name: "spin",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "07:00 - 08:00 Instructor: Maria",
      saturday: "09:00 - 10:00 Instructor: Maria",
      sunday: ""
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
    <>
      <div className="schedule" onClick={handleShow}>
        <img src={CalendarIcon}/>
        <span>See Schedule</span>
      </div>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Table bordered>
              <thead>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{sunday}</td>
                  <td>{monday}</td>
                  <td>{tuesday}</td>
                  <td>{wednesday}</td>
                  <td>{thursday}</td>
                  <td>{friday}</td>
                  <td>{saturday}</td>
                </tr>
              </tbody>
            </Table>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Schedule
