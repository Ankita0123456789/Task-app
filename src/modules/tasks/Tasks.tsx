import React, { useState } from 'react'
import {Container, Row, Col} from "react-bootstrap"
import {userObject, tasks} from '../../utils/defaultValues';

type Props = {}

function Tasks(props: Props){
  // const [Atask, setAtask] = useState([]);

  // function addTasks(task){
  //   setAtask([task, ...Atask])
  // }

  return (
    <Container>
    <Row className="d-flex align-items-center justify-content-center mt-5">
    <Col className='border p-3 py-5 mt-5' xs={12} md={8} lg={6}>
      <h3 className='text-center mb-5'>List of Tasks</h3>
      {
        userObject && tasks.map(task=>{
          return(
            <div key={task.id}>
            <p className='border p-2'>
              <b className='ms-4'>{task.id} .</b>
              <b className='ms-2'>{task.title} </b>
              <b className='ms-4'>Description: </b>
              <i className='ms-2 me-2'>{task.description}</i>
              <b className='mx-3'>{task.dueDate}</b>
              <b className='mx-3 text-uppercase'>{task.status}</b></p>
            </div>
          )
        })
      }
    
    </Col>
   </Row>
 </Container>
  )
}

export default Tasks