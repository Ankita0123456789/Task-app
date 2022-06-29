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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let meeting = {
      id: Number,
      title,
      description,
      date,
      status,
    };
    setMeetings([...meetings, meeting]);

    setTitle("");
    setDescription("");
    setDate("");
    setStatus("");
  };

  const deleteMeeting = (title: any) => {
    const filterMeetings = meetings.filter((element: any, index: any) => {
      return element.title !== title;
    });
    setMeetings(filterMeetings);
  };

  useEffect(() => {
    localStorage.setItem("meetings", JSON.stringify(meetings));
  }, [meetings]);

  return (
    <Container fluid>
      <Sidebar />
      <Row className="text-center">
        <Link
          to={`/meeting/${
            meetings.length > 0 ? meetings[meetings.length - 1]?.id + 1 : 1
          }`}
        >
          Add New
        </Link>
      </Row>
      <Row className="justify-content-around mt-5">
        <Col className="text-center border p-3 py-5" xs={12} md={8} lg={4}>
          <Form>
            <h3 className="mb-5">Add Meetings</h3>
            <INput
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              name="title"
              LabelName="Title"
              type="text"
            />
            <INput
              value={description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDescription(e.target.value)
              }
              name="description"
              LabelName="Description"
              type="text"
            />
            <INput
              value={date}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDate(e.target.value)
              }
              name="date"
              LabelName="Date"
              type="date"
            />
            <INput
              value={status}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStatus(e.target.value)
              }
              name="status"
              LabelName="Status"
              type="text"
            />
            <Buttons type="submit" name="Add Meetings" onClick={handleSubmit} />
          </Form>
        </Col>
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
              <Meetings meets={meetings} deleteMeeting={deleteMeeting} />
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MeetingForm;
