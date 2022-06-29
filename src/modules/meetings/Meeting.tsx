import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Container, Row, Col } from "react-bootstrap";

import { Buttons, INput, Sidebar } from "../../components/index";

import { meetingInit } from "./defaultValues";

type Props = {};

const Meeting = (props: Props) => {
  const params: any = useParams();
  const { id } = params;
  const [state, setState] = useState(JSON.parse(JSON.stringify(meetingInit)));
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    const meetings: any = JSON.parse(
      localStorage.getItem("meetings") as string
    );

    const data = meetings?.find((m: any) => m.id === Number(id)) ?? [];

    if (data) {
      setState(data);
    } else {
      setIsNew(true);
      setState({
        id,
        title: "",
        description: "",
        date: "",
        status: "",
      });
    }
  }, [id]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const meetings = JSON.parse(localStorage.getItem("meetings") as string);
    meetings.push(state);
    localStorage.setItem("meetings", JSON.stringify(meetings));
    setState(JSON.parse(JSON.stringify(meetingInit)));
  };

  return (
    <Container>
      <Sidebar />
      <Row className="d-flex justify-content-around mt-5">
        <Col className="text-center border p-3 py-5" xs={12} md={8} lg={4}>
          <Form>
            <INput
              value={state.title}
              name="name"
              LabelName="Title"
              type="text"
              onChange={onChange}
            />
            <INput
              value={state.description}
              name="description"
              LabelName="Description"
              type="text"
              onChange={onChange}
            />
            <INput
              value={state.date}
              name="date"
              LabelName="Date"
              type="date"
              onChange={onChange}
            />
            <INput
              value={state.status}
              name="status"
              LabelName="Status"
              type="text"
              onChange={onChange}
            />
            <Buttons
              type="submit"
              name={isNew ? "Add New Meeting" : "Update Meeting"}
              onClick={handleSubmit}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Meeting;
