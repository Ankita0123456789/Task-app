import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Form, Container, Row, Col } from "react-bootstrap";

import { Buttons, INput, Sidebar, Select } from "../../components/index";

import { TasksInit, statuses } from "./defaultValues";

const TaskForm = () => {
  const navigate = useNavigate();
  const params: any = useParams();
  const { id } = params;

  const [state, setState] = useState(JSON.parse(JSON.stringify(TasksInit)));
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    const tasks: any = JSON.parse(localStorage.getItem("tasks") as string);

    const data = tasks?.find((t: any) => t.id === Number(id));

    if (data) {
      setState(data);
    } else {
      setIsNew(true);
      setState({
        id,
        title: "",
        description: "",
        duedate: "",
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
    const tasks = isNew
      ? JSON.parse(localStorage.getItem("tasks") as string)
      : JSON.parse(localStorage.getItem("tasks") as string).filter(
          (task: any) => task.id !== Number(id)
        );
    tasks.push(state);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setState(JSON.parse(JSON.stringify(TasksInit)));
    navigate("/tasks");
  };

  const validated = () => {
    if (
      state.title.length > 0 &&
      state.title.length <= 14 &&
      state.description.length > 0 &&
      state.description.length <= 60 &&
      state.duedate &&
      state.status
    ) {
      return true;
    }
  };

  return (
    <Container fluid>
      <Row className="">
        <Col className="" xs={12} md={3} lg={3}>
          <Sidebar />
        </Col>
        <Col className="text-center py-5" xs={12} md={8} lg={9}>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={7}>
              <div className="mb-5">
                {isNew ? <h2>Add New Task</h2> : <h2>Update Task</h2>}
              </div>
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
                  value={state.duedate}
                  name="duedate"
                  LabelName="dueDate"
                  type="date"
                  onChange={onChange}
                />
                <Select
                  LabelName="Status"
                  value={state.status}
                  name="status"
                  options={statuses}
                  onChange={onChange}
                />
                <Buttons
                  type="submit"
                  name={isNew ? "Add New Task" : "Update Task"}
                  onClick={handleSubmit}
                  disabled={!validated()}
                />
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskForm;
