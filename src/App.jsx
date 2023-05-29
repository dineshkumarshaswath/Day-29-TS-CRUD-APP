import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Teacherslist from './Components/teachers.jsx'
import { Switch, Route } from 'react-router-dom'
import Addteacherlist from './Components/addteacher.jsx';
import Updateteacher from './Components/updateteacher.jsx';
import Teacherdata from './Components/teacherdata';
import { useState } from 'react';
import Studentslist from './Components/students';
import Studentdata from './Components/studentdata';
import Addstudents from './Components/addstudents';
import Updatestudents from './Components/updatestudents';
import Teachers from './Components/teacherslist';
import Students from './Components/studentlist';
import Home from './Components/home'

function App() {
  const [teachers, setTeachers] = useState(Teacherdata)
  const [students, setStudents] = useState(Studentdata)

  return (

    <div>



      <Switch>

        {/* teacher router */}

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/teachers">
            <Teacherslist
            teachers={teachers}
            setTeachers={setTeachers} />
         </Route>

         <Route path="/teacher/:id">
          <Updateteacher
            teachers={teachers}
            setTeachers={setTeachers} />
        </Route>
 

          <Route path="/add">
          <Addteacherlist
            teachers={teachers}
            setTeachers={setTeachers} />
        </Route>
        
        <Route path="/teacherlist">
          <Teachers
            teachers={teachers}
            setTeachers={setTeachers}
          />
        </Route>

        
 {/*  students route */}
 
        <Route path="/students">
          <Studentslist
            students={students}
            setStudents={setStudents} />
        </Route>

        <Route path="/addstudents">
          <Addstudents
            students={students}
            setStudents={setStudents} />
        </Route>

        <Route path="/student/:id">
          <Updatestudents
            students={students}
            setStudents={setStudents} />
        </Route>

      

        <Route path="/studentlist">
          <Students
            students={students}
            setStudents={setStudents}
          />
        </Route>


      </Switch>

    </div>

  )
}

export default App
