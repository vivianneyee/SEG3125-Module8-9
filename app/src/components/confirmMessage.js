import {React, useState} from 'react'
import {Toast, Button} from 'react-bootstrap'

function ConfirmMessage(props) {
  const [show, setShow] = useState(false);
  const msg = props.msg;
  const msgTitle = props.msgTitle;
  const btn = props.btn;

  return (
    <div className="confirm">
      <Button type="submit" className="confirmBtn" onClick={() => setShow(true)}>{btn}</Button>
      <Toast className="confirmToast" onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">{msgTitle}</strong>
        </Toast.Header>
        <Toast.Body>{msg}</Toast.Body>
      </Toast>
    </div>
  );

}

export default ConfirmMessage
