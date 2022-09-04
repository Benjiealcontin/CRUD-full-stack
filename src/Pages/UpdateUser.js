import React from 'react'
import Sidebar from '../Components/Sidebar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function UpdateUser() {
  return (
    <div><Sidebar/>

    <div className='container'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Firstname</Form.Label>
        <Form.Control type="text" placeholder="Enter your Firstname" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="Enter your Lastname" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    </div>
  )
}

export default UpdateUser