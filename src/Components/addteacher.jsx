import React from 'react'
import { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


function Addteacherlist({ teachers, setTeachers }) {

   const [name, setTeachername] = useState("");
   const [gender, setTeachergender] = useState("")
   const [department, setTeacherdepartment] = useState("");
   const [experience, setTeacherexperience] = useState("");
    const history=useHistory()


//add function is here

   function addteachers() {
      const newteacher = {
         name: name,
         gender: gender,
         department: department,
         experience: experience
      }
      console.log(newteacher);
      setTeachers([...teachers, newteacher])
      alert('added successfully')
     history.push("/teachers")
   }

   return (
      <div style={{ paddingLeft: "50px" ,textAlign:'center'}} >

         <h3>Addteacher here</h3>
         <Row xs={1} sm={1} md={1} lg={5}>
            <Col> <input
               value={name}
               onChange={(e) => setTeachername(e.target.value)}
               placeholder="Teacher name" />
            </Col>
            <Col>  <input
               value={gender}
               onChange={(e) => setTeachergender(e.target.value)}
               placeholder='Teacher gender' />

            </Col>
            <Col> <input value={department}
               onChange={(e) => setTeacherdepartment(e.target.value)}
               placeholder='Teacher department' />
            </Col>
            <Col> <input
               value={experience}
               onChange={(e) => setTeacherexperience(e.target.value)}
               placeholder='Teacher experience' />
            </Col>
            <Col><Button variant="success" onClick={addteachers}> add Teacher</Button>
            </Col>
         </Row>










      </div>

   )
}

export default Addteacherlist;