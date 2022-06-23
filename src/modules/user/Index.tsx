import React from 'react'
import {useState} from 'react'
import Buttons from '../../components/Button'
import INput from '../../components/Input'
import {Container, Row, Col, Form} from "react-bootstrap"
import '../user/style.css'


type Props = {}

const Index = (props: Props) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <Container>
       <Row className="d-flex align-items-center justify-content-center mt-5">
       <Col className='border p-3 py-5 mt-5' xs={12} md={8} lg={5}>
        <Form>
        <h3 className='mb-5'>User Login</h3>
        <INput LabelName='E-mail Address' type='email'  value={email}
                onChange={handleEmail}/>
        <INput LabelName='Password' type='password' value={password}
                  onChange={handlePassword}/>
        <Buttons name="Login" type="submit" onClick={handleSubmit}/>
        </Form>
       
       </Col>
      </Row>
     
     
     
    </Container>
  )
}

export default Index