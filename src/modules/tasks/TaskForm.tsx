import React from 'react'
import Buttons from '../../components/Button'
import INput from '../../components/Input'
import {Container, Row, Col, Form} from 'react-bootstrap'

type Props = {}

const TaskForm = (props: Props) => {
return(
    <Container>
    <Row className="d-flex align-items-center justify-content-center mt-5">
    <Col className='border p-3 py-5 mt-5' xs={12} md={8} lg={5}>
     <Form>
     <h3 className='mb-5'>Add Tasks</h3>
     <INput LabelName='E-mail Address' type='email' />
     <INput LabelName='Password' type='password'/>
     <Buttons type="submit"  name="Login" />
     </Form>
    
    </Col>
   </Row>
 </Container>
)
}

export default TaskForm