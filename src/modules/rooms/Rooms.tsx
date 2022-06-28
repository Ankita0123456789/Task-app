import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Sidebar } from '../../components';
import { RoomForm } from '../index'

import * as Icon from 'react-bootstrap-icons';

type Props = {rooms?: any, deleteRooms?: any}

function Rooms({rooms, deleteRooms}: Props) {
    return rooms.map((room:any, Index: any) =>(
      <tr key={room.name}>
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
    )
  )
}

export default Rooms