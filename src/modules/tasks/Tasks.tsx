import * as Icon from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

type Props = { tasks?: any; deleteTasks?: any; editTasks?: any };

const Tasks = ({ tasks, deleteTasks, editTasks }: Props) => {
  return tasks.map((task: any, Index: any) => (
    <tr key={task.id}>
      <td>{(task.id = Index + 1)}</td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.duedate}</td>
      <td>{task.status}</td>
      <td>
        <button
          className="btn delete-btn me-2"
          onClick={() => deleteTasks(task.id)}
        >
          <Icon.TrashFill />
        </button>
      </td>
      <td>
        <NavLink
          to={`/task/${task.id}`}
          className="btn me-2"
          onClick={() => editTasks(task.id)}
        >
          <Icon.PencilFill />
        </NavLink>
      </td>
    </tr>
  ));
};

export default Tasks;
