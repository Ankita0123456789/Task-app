import { Container, Row, Col, Table } from "react-bootstrap"
import * as Icon from 'react-bootstrap-icons';
import { Sidebar } from '../../components';
import { NavLink } from "react-router-dom";

type Props = {meets?: any, deleteMeeting?: any}

const Meetings = ({meets, deleteMeeting}: Props) => {
  return meets.map((meeting:any, Index: any) =>(
    <tr key={meeting.id}>
    <td>{meeting.id = Index+1}</td>
    <td>{meeting.title}</td>
    <td>{meeting.description}</td>
    <td>{meeting.date}</td>
    <td>{meeting.status}</td>
    <td className="delete-btn" onClick={()=>deleteMeeting(meeting.title)}>
      <Icon.TrashFill/>
    </td>
    <td>
    <NavLink to={`/meeting/${meeting.id}`}
     className="btn btn-outline-dark me-2">
                     Edit
    </NavLink>
    </td>
    </tr>
  )
  )
}

export default Meetings