import React, { useState } from 'react'
import { Container, Row, Col, Table } from "react-bootstrap"
import { userObject, tasks } from '../../utils/defaultValues';
import { Sidebar } from '../../components/index';
import TaskForm from './TaskForm';

type Props = {}

function Tasks(props: Props) {
  // const [Atask, setAtask] = useState([]);

  // function addTasks(task){
  //   setAtask([task, ...Atask])
  // }

  return (
    <Container fluid>
      <Sidebar />
      <Row className="d-flex justify-content-around mt-5">
        <TaskForm />
        <Col className='border p-3 py-5' xs={12} md={8} lg={6}>
          <h3 className='text-center mb-5'>List of Tasks</h3>
          {
            userObject && tasks.map(task => {
              return (
                // <div key={task.id}>
                //   <p className='border p-2'>
                //     <b className='ms-4'>{task.id}</b>
                //     <b className='ms-2'>{task.title} </b>
                //     <b className='ms-4'>Description: </b>
                //     <i className='ms-2 me-2'>{task.description}</i>
                //     <b className='mx-3'>{task.dueDate}</b>
                //     <b className='mx-3 text-uppercase'>{task.status}</b></p>
                // </div>
                <Table bordered hover>
                <tbody>
                  <tr>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.dueDate}</td>
                    <td>{task.status}</td>
                  </tr>
                </tbody>
              </Table>
              )
            })
          }

        </Col>
      </Row>
    </Container>
  )
}

export default Tasks