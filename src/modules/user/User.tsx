import React, { useContext, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Buttons from "../../components/Button";
import INput from "../../components/Input";

import { GlobalContext } from "../../contexts/GlobalContext";

type Props = {};

const Index = (props: Props) => {
  const { signIn } = useContext(GlobalContext);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const signin = await signIn(state.email, state.password);
      if (signin.success) {
        navigate("/tasks");
      } else {
        alert(signin.message);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center mt-5">
        <Col className="border p-3 py-5 mt-5" xs={12} md={8} lg={5}>
          <Form>
            <h3 className="mb-5">User Login</h3>
            <INput
              LabelName="E-mail Address"
              name="email"
              type="email"
              id="username"
              value={state.email}
              onChange={handleChange}
            />
            <INput
              LabelName="Password"
              name="password"
              type="password"
              value={state.password}
              onChange={handleChange}
            />
            <Buttons name="Login" type="submit" onClick={handleSubmit} />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
