import { NavLink } from "react-router-dom";
import "./style.css";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <>
      <div className="sidenav pt-5 ps-5">
        <h4>Menu</h4>
        <ul className="navbar-nav mx-auto my-3 mb-lg-0 fs-5">
          <li className="nav-item">
            <NavLink className="nav-link" to="/tasks">
              Tasks
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/meetings">
              Meetings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/rooms">
              Meeting Rooms
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
