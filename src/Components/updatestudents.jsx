import React from 'react'
import { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import Base from './base.jsx'
import { Row, Col, Button } from "react-bootstrap"


function Updatestudents({ students, setStudents }) {

    const history = useHistory()
    const { id } = useParams()
    const [name, setName] = useState("");
    const [standard, setStandard] = useState("");
    const [gender, setGender] = useState("");


    const a = students[id];

    useEffect(() => {
        setName(a.Name)
        setStandard(a.Standard)
        setGender(a.Gender)

    }, [a])






//update function is here
    function handleupdate() {

        const newupdate = {
            Name: name,
            Standard: standard,
            Gender: gender
        }

        students[id] = newupdate;
        console.log(newupdate);
        setStudents(students)
        history.push("/students")
        alert("update successfully")


    }



    return (

        <div>





            <Base>

                <div className='update'>
                    <h3>Update students data</h3>
                    <Row xs={1} sm={1} md={1} lg={4} >
                        <Col><input type="text" className='value'
                            value={name}
                            onChange={(e) => setName(e.target.value)} /></Col>
                        <Col><input type="text" className='value'
                            value={standard}
                            onChange={(e) => setStandard(e.target.value)} /></Col>
                        <Col><input type="text" className='value'
                            value={gender}
                            onChange={(e) => setGender(e.target.value)} />
                        </Col>
                        <Col><Button variant="primary" onClick={handleupdate} >update</Button></Col>
                    </Row>

                </div>









            </Base>


        </div>
    )
}

export default Updatestudents