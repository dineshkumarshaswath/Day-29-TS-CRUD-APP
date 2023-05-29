import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import Base from './base.jsx'


function Students({ students, setStudents }) {
  const history = useHistory()

// delete function is here

  function deletestudent(id) {
    const newstudentslist = students.filter((student, idx) => idx != id);
    setStudents(newstudentslist)
  }
  return (
    <div>

      <Base>


        <div style={{ padding: '40px' }}>

          <Row xs={1} sm={2} md={2} lg={3}>

            {students.map((student, id) => (
              <Col>
                <Card style={{ width: '18rem' }} key={id}>
                  <Card.Body>
                    <Card.Title>Student list</Card.Title><hr />
                    <Card.Text><h6>NAME:{student.Name}</h6></Card.Text>
                    <Card.Text><h6> STANDARD: {student.Standard}</h6></Card.Text>
                    <Card.Text><h6>GENDER: {student.Gender}</h6></Card.Text>

                    <Button variant="primary" style={{ marginRight: "10px", marginLeft: "30px" }}
                      onClick={() => history.push(`/student/${id}`)}>

                      Edit</Button>

                    <Button variant="danger" onClick={() => deletestudent(id)}>Delete</Button>
                  </Card.Body>
                </Card>
              </Col>

            ))
            }
          </Row>

        </div>
      </Base>

    </div>

  )


}

export default Students;