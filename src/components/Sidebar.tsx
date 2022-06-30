import React from 'react';
import {Offcanvas} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import "./style.css"

type Props = {}

const Sidebar = (props:Props) =>  {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
    <div className='arrow-right'>
    <Icon.ChevronDoubleRight type='button' />
    </div>
     
     <div className='sidenav'>
      <Offcanvas show={true}>
        <Offcanvas.Header>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
        <li className="nav-item">
          <NavLink className="nav-link" to="/tasks">Tasks</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/meetings" >Meetings</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/rooms">Meeting Rooms</NavLink>
        </li>
      </ul>
        </Offcanvas.Body>
      </Offcanvas>
     </div>
    </>
  );
}

export default Sidebar;