import * as Icon from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

type Props = { meets?: any; deleteMeeting?: any; editMeeting?: any };

const Meetings = ({ meets, deleteMeeting, editMeeting }: Props) => {
  return meets.map((meeting: any, Index: any) => (
    <tr key={meeting.id}>
      <td>{(meeting.id = Index + 1)}</td>
      <td>{meeting.title}</td>
      <td>{meeting.description}</td>
      <td>{meeting.date}</td>
      <td>{meeting.status}</td>
      <td>
      <button
          className="btn delete-btn me-2"
          onClick={() => deleteMeeting(meeting.id)}
        >
        <Icon.TrashFill />
        </button>
      </td>
      <td>
        <NavLink
          to={`/meeting/${meeting.id}`}
          className="btn me-2"
          onClick={() => editMeeting(meeting.id)}
        >
          <Icon.PencilFill />
        </NavLink>
      </td>
    </tr>
  ));
};

export default Meetings;
