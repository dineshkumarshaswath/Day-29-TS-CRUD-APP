import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap';


function Addstudents({ students, setStudents }) {

    const [name, setName] = useState("");
    const [standard, setStandard] = useState("");
    const [gender, setGender] = useState("");

    const history = useHistory();

//add funcion is here
    function handleclick() {
        const newstudent = {
            Name: name,
            Standard: standard,
            Gender: gender
        };

        console.log(newstudent);
        console.log(students);
        setStudents([...students, newstudent])
        setName("")
        setStandard("")
        setGender("")
        alert('added successfully')

        history.push("/students")

    }




    return (
        <div>



            <h3 style={{textAlign:'center'}}>Addstudents here</h3>

            <div style={{ paddingLeft: "50px", margin: "20px" }}>
                <Row xs={1} sm={1} md={1} lg={4}>
                    <Col><input type="text" className='value'
                        value={name}
                        placeholder="Enter student name"
                        onChange={(e) => setName(e.target.value)} />
                    </Col>

                    <Col><input type="text" className='value'
                        value={standard}
                        placeholder="Enter standard"
                        onChange={(e) => setStandard(e.target.value)} /></Col>

                    <Col><input type="text" className='value'
                        value={gender}
                        placeholder='Enter gender'
                        onChange={(e) => setGender(e.target.value)} /></Col>

                    <Col>
                        <Button variant='success'
                            onClick={handleclick}>add student</Button></Col>

                </Row>
            </div>





        </div>

    )

}

export default Addstudents