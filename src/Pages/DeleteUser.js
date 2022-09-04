import React from 'react'
import Sidebar from '../Components/Sidebar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DeleteUser() {
  return (
    <div>     
      <Sidebar/>
      <div className='container'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>User ID</Form.Label>
        <Form.Control type="text" placeholder="Enter ID" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    </div>
  )
}

export default DeleteUser