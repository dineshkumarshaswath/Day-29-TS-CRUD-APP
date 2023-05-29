import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Base from './base.jsx'
import { Row, Col, Button } from "react-bootstrap"




function Updateteacher({ teachers, setTeachers }) {

  const { id } = useParams();
  const a = teachers[id];
  const [name, setTeachername] = useState("");
  const [gender, setTeachergender] = useState("")
  const [department, setTeacherdepartment] = useState("");
  const [experience, setTeacherexperience] = useState("");

  const history = useHistory()

  useEffect(() => {
    setTeachername(a.name)
    setTeachergender(a.gender)
    setTeacherdepartment(a.department)
    setTeacherexperience(a.experience)
    console.log(a)
    console.log(teachers[id])
  }, [a])


//update function is here

  function handleupdate() {
    const newupdate = {
      name: name,
      gender: gender,
      department: department,
      experience: experience
    }


    teachers[id] = newupdate;
    setTeachers(teachers)
    console.log(a);
    history.push("/teachers")
    alert("update successfully")
  }


  return (
    <div>


      <Base>

        <div className='update'>
          <h3>Update Teacher data</h3>
          <Row xs={1} sm={1} md={1} lg={5}>
            <Col> <input
              value={name}
              onChange={(e) => setTeachername(e.target.value)}
              placeholder="Teacher name" /><br /></Col>
            <Col> <input
              value={gender}
              onChange={(e) => setTeachergender(e.target.value)}
              placeholder='Teacher gender' /><br /></Col>
            <Col>  <input
              value={department}
              onChange={(e) => setTeacherdepartment(e.target.value)}
              placeholder='Teacher department' /><br /></Col>
            <Col>  <input
              value={experience}
              onChange={(e) => setTeacherexperience(e.target.value)}
              placeholder='Teacher experience' /><br />
            </Col>
            <Col> <Button onClick={handleupdate}> update</Button></Col>
          </Row>

        </div>


        </Base>

    </div>
  )
}

export default Updateteacher;