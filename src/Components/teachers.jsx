import React from 'react'


import { Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Addteacherlist from './addteacher.jsx';
import Base from './base.jsx'

import { useHistory } from 'react-router-dom';


function Teacherslist({ teachers, setTeachers }) {
 
  const history = useHistory();

  
    //delete function is here
  const deleteteacher = (id) => {
    const newteacherlist = teachers.filter((teacher, idx) => idx !== id)

    console.log(newteacherlist)
    setTeachers(newteacherlist)



  }



  return (
    <div>
      <Base>

        <div className="add">
          <Row >
            <Addteacherlist
              teachers={teachers}
              setTeachers={setTeachers}
            />
          </Row>

        </div>






        <div className='cards'>
          <Row xs={1} sm={2} md={2} lg={3} className='row' >

            {teachers.map((teacher, id) => (
              <Col>
                <Card style={{ width: '18rem' }} key={id}>
                  <Card.Body>
                    <Card.Title>Teacher list</Card.Title><hr />
                    <Card.Text> <h6>NAME: {teacher.name}</h6></Card.Text>
                    <Card.Text> <h6>GENDER: {teacher.gender}</h6> </Card.Text>
                    <Card.Text><h6>DEPARTMENT: {teacher.department}</h6></Card.Text>
                    <Card.Text><h6>EXPERIENCE: {teacher.experience}</h6> </Card.Text>
                    <Button variant="primary" style={{ marginRight: "10px", marginLeft: "30px" }}
                      onClick={() => history.push(`/teacher/${id}`)}>Edit</Button>
                    <Button variant="danger" onClick={() => deleteteacher(id)}>Delete</Button>
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

export default Teacherslist;