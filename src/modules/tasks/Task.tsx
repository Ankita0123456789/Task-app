import { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components/index";
import { Tasks } from "../index";

type Props = {};

const getTasks = () => {
  const data = localStorage.getItem("tasks");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const Task = (props: Props) => {
  const [tasks, setTasks] = useState(getTasks());

  const deleteTasks = (id: any) => {
    const filterTasks = tasks.filter((element: any, index: any) => {
      return element.id !== id;
    });
    setTasks(filterTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4} lg={3}>
          <Sidebar />
        </Col>
        <Col className="p-3 py-5" xs={12} md={8} lg={9}>
          <Row className="justify-content-center">
            <div className="text-center">
              <Link
                className="btn btn-outline-primary px-5 me-2"
                to={`/task/${
                  tasks.length > 0 ? tasks[tasks.length - 1]?.id + 1 : 1
                }`}
              >
                Add New Task
              </Link>
            </div>
            <div className="mt-5">
              <h3 className="text-center mb-5">List of Tasks</h3>
              <Table bordered hover responsive className="text-center">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>DueDate</th>
                    <th>Status</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <Tasks tasks={tasks} deleteTasks={deleteTasks} />
                </tbody>
              </Table>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Task;
