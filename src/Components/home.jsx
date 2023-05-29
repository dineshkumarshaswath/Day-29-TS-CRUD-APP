import React from 'react'
import Base from './base.jsx'
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom"

function Home() {
    const history = useHistory()

    return (

        <div>
            <Base>
                <h1 style={{ textAlign: "center", borderBottom: "5px double " }}>
                    Welcome to our Administration Application</h1>

                <div style={{ textAlign: 'center', margin: '50px' }}>
                    <div style={{ textAlign: 'center', margin: '30px' }}>
                        <h3>If you are a Teacher click here</h3>
                        <Button onClick={() => history.push("/teachers")}> Teacher </Button>
                    </div>


                    <div style={{ textAlign: 'center', margin: '30px' }}>
                        <h3>If you are a Student click here</h3>
                        <Button variant="success"
                            onClick={() => history.push('/students')}> Student</Button>
                    </div>
                </div>

            </Base>



        </div>
    )
}
export default Home;