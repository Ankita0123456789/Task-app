import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Form,Container, Row, Col, Table } from 'react-bootstrap'
import { Buttons, INput, Sidebar } from '../../components/index'
import { MeetingIF } from './interfaces'

type Props = {}

const Meeting = (props: Props) => {
  const {id} = useParams();

  const [state, setState] = useState<MeetingIF[]>([]);

  useEffect(()=>{
      const meeting:any = () => {
        const data = JSON.parse(localStorage.getItem('meetings') as string)?.filter((m:any) => m.id === Number(id))
        setState(data);
      }
      meeting();
      
  }, [id])
  console.log(state)

  return (
    <div>
      {
      state.map((meet:any)=>
      <Container  key={meet.id}>
        <Row className="d-flex justify-content-around mt-5">
        <Col className='text-center border p-3 py-5' xs={12} md={8} lg={4}>
        <Form>
        <INput  value={meet.title} name='name' LabelName='Name' type='text' />
        <INput  value={meet.description} name='name' LabelName='Name' type='text' />
        <INput  value={meet.date} name='name' LabelName='Name' type='text' />
        <INput  value={meet.status} name='name' LabelName='Name' type='text' />
        <Buttons type="submit" name="Update" />
        </Form>
        </Col>
        </Row>
      </Container>
      )}
    </div>
  )
}

export default Meeting