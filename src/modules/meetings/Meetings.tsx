import * as Icon from 'react-bootstrap-icons';
import { NavLink } from "react-router-dom";

type Props = {meets?: any, deleteMeeting?: any, editMeeting?:any}

const Meetings = ({meets, deleteMeeting, editMeeting}: Props) => {
  return meets.map((meeting:any, Index: any) =>(
    <tr key={meeting.id}>
    <td>{meeting.id = Index+1}</td>
    <td>{meeting.title}</td>
    <td>{meeting.description}</td>
    <td>{meeting.date}</td>
    <td>{meeting.status}</td>
    <td className="delete-btn" onClick={()=>deleteMeeting(meeting.id)}>
      <Icon.TrashFill/>
    </td>
    <td>
    <NavLink to={`/meeting/${meeting.id}`}
     className="btn btn-outline-dark me-2" onClick={()=>editMeeting(meeting.id)}>
                     Edit
    </NavLink>
    </td>
    </tr>
  )
  )
}

export default Meetings