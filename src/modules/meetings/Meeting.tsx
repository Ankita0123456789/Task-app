import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Form, Container, Row, Col } from "react-bootstrap";


import { Buttons, INput, Sidebar, Select } from "../../components/index";

import { meetingInit } from "./defaultValues";

type Props = {};

const Meeting = (props: Props) => {
  const navigate = useNavigate();
  const params: any = useParams();
  const { id } = params;
  const [state, setState] = useState(JSON.parse(JSON.stringify(meetingInit)));
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    const meetings: any = JSON.parse(
      localStorage.getItem("meetings") as string
    );

    const data = meetings?.find((m: any) => m.id === Number(id));

    if (data) {
      setState(data);
    }
     else {
      setIsNew(true);
      setState({
        id,
        title: "",
        description: "",
        date: "",
        status: [],
      });
    }
  }, [id]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const meetings = isNew? JSON.parse(localStorage.getItem("meetings") as string) : JSON.parse(localStorage.getItem("meetings") as string).filter((meet:any)=> meet.id !== Number(id));
    meetings.push(state);
    localStorage.setItem("meetings", JSON.stringify(meetings));
    setState(JSON.parse(JSON.stringify(meetingInit)));
    navigate('/meetings')
  };


  return (
    <Container fluid>
      <Sidebar />
      <Row className="d-flex justify-content-center mt-5">
        <Col className="text-center border p-3 py-5" xs={12} md={8} lg={4}>
          <Form>
            <INput
              value={state.title}
              name="title"
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
           <Select 
           LabelName="Status" 
           value={state.status} 
           name="status" />
            <INput
              value={state.status}
              name="status"
              LabelName="Status"
              type="text"
              onChange={onChange}
            />
            <Buttons
              type="submit"
              name={ isNew ? "Add New Meeting" : "Update Meeting"}
              onClick={handleSubmit}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Meeting;
