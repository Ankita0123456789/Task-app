import { Buttons, INput, Sidebar } from '../../components/index'
import { Form,Container, Row, Col, Table } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import {Rooms} from '../index'

type Props = {}

const getRooms=()=>{
  const data=localStorage.getItem('rooms');
  if(data){
    return JSON.parse(data);
  }
  else{
    return[]
  }
}
const RoomForm = (props: Props) => {
  
    const [rooms, setRooms] = useState(()=>getRooms())
    const [state, setState] = useState({
      name: "",
      room: "",
      date: "",
      avail: ""
    });
  
    
      const handleSubmit = (e:React.ChangeEvent<HTMLInputElement>) =>{
          e.preventDefault();
          const newRooms = [...rooms, state]; 
          setRooms({
            newRooms
          })
          localStorage.setItem('rooms', JSON.stringify(newRooms));
      }
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [e.target.name]: e.target.value });  
    };

    const deleteroom=(title:any)=>{
      const filterrooms = rooms.filter((element:any, index:any)=>{
        return element.title !== title
      }) 
      setRooms(filterrooms)
    }

    return (
        <Container fluid >
        <Sidebar />
        <Row className="d-flex justify-content-around mt-5">
        <Col className='text-center border p-3 py-5' xs={12} md={8} lg={4}>
            <Form>
                <h3 className='mb-5'>Add Meeting Rooms</h3>
                <INput value={state.name} onChange={handleChange} name='name' LabelName='Room Name' type='text' />
                <INput value={state.room} onChange={handleChange} name='room' LabelName='Room No.' type='text' />                
                <INput value={state.date} onChange={handleChange} name='date' LabelName='Date' type='date' />
                <INput value={state.avail} onChange={handleChange} name='avail' LabelName='Availability' type='text' />
                <Buttons type="submit" name="Add Rooms" onClick={handleSubmit} />
            </Form>

        </Col>
          <Col className='border p-3 py-5' xs={12} md={8} lg={6}>
            <h3 className='text-center mb-5'>List of Meeting Rooms</h3>
            <Rooms rooms={rooms} deleteRooms={deleteroom} />   
          </Col>
  
        </Row>
      </Container>

    )
}

export default RoomForm