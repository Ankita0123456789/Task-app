import { useEffect, useState } from "react";
import { Form, Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Buttons, INput, Sidebar } from "../../components/index";

import { Meetings } from "../index";

type Props = {};

const getMeetings = () => {
  const data = localStorage.getItem("meetings");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const MeetingForm = (props: Props) => {
  const [meetings, setMeetings] = useState(getMeetings());
  const [isEdit, setIsEdit] = useState(null)


  const deleteMeeting = (id: any) => {
    const filterMeetings = meetings.filter((element: any, index: any) => {
      return element.id !== id;
    });
    setMeetings(filterMeetings);
  };

  useEffect(() => {
    localStorage.setItem("meetings", JSON.stringify(meetings));
  }, [meetings]);

  const editMeeting = (id:any) =>{
    let newEditMeeting = meetings.find((elem:any) => {
       return elem.id === id
    });
    console.log(newEditMeeting);
    setIsEdit(id)
  }
  return (
    <Container fluid>
      <Sidebar />
      <Row className="text-center justify-content-center">
      <div className="col-2">
        <Link className="btn btn-outline-primary me-2"
          to={`/meeting/${
            meetings.length > 0 ? meetings[meetings.length - 1]?.id + 1 : 1
          }`}
        >
          Add New
        </Link>
        </div>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col className="border p-3 py-5" xs={12} md={8} lg={6}>
          <h3 className="text-center mb-5">List of Meetings</h3>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <Meetings meets={meetings} editMeeting={editMeeting} deleteMeeting={deleteMeeting} />
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MeetingForm;
