import { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components/index";
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

  const deleteMeeting = (id: any) => {
    const filterMeetings = meetings.filter((element: any, index: any) => {
      return element.id !== id;
    });
    setMeetings(filterMeetings);
  };

  useEffect(() => {
    localStorage.setItem("meetings", JSON.stringify(meetings));
  }, [meetings]);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3} lg={3}>
          <Sidebar />
        </Col>
        <Col className="p-3 py-5" xs={12} md={8} lg={9}>
          <Row className="justify-content-center">
            <div className="text-center">
              <Link
                className="btn btn-outline-primary px-5 me-2"
                to={`/meeting/${
                  meetings.length > 0
                    ? meetings[meetings.length - 1]?.id + 1
                    : 1
                }`}
              >
                Add New Meeting
              </Link>
            </div>
            <div className="mt-5">
              <h3 className="text-center mb-5">List of Meetings</h3>
              <Table bordered hover className="text-center">
                <thead >
                  <tr>
                    <th>Sr. No.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <Meetings meets={meetings} deleteMeeting={deleteMeeting} />
                </tbody>
              </Table>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MeetingForm;
