import React from 'react'
import { Container, Row, Col, Table } from "react-bootstrap"
import { Sidebar } from '../../components';
import { RoomForm } from '../index'

import * as Icon from 'react-bootstrap-icons';

type Props = {rooms?: any[], deleteRooms?: any}

const Rooms = ({rooms, deleteRooms}: Props):JSX.Element => {
    if(!rooms || rooms.length===0){
      return <span>No data</span>
    }
    return (
      <>
      {rooms?.map((room:any, Index: any) =>(
      <Table  key={room.id} bordered hover>
      <thead>
      <tr>
        <th>Sr. No.</th>
        <th>Room No.</th>
        <th>Room Name</th>
        <th>Date</th>
        <th>Available</th>
      </tr>
      </thead>
    <tbody>
    <tr>
      <td>{room.id = Index + 1}</td>      
      <td>{room.name}</td>
      <td>{room.room}</td>
      <td>{room.date}</td>
      <td>{room.avail}</td>
      <td className="delete-btn" onClick={()=>deleteRooms(room.title)}>
<Icon.TrashFill/>
</td>
{/* <td>
<NavLink to={`/meeting/${meeting.id}`} className="btn btn-outline-dark me-2">
         Edit
</NavLink>
</td> */}
</tr>        
    </tbody>
  </Table>
    )
  )
  }
      </>
      )
   
}

export default Rooms