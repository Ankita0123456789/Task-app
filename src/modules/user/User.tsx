import React, { useContext } from "react";
import { useState } from "react";
import Buttons from "../../components/Button";
import INput from "../../components/Input";
import { Container, Row, Col, Form } from "react-bootstrap";

import { GlobalContext } from "../../contexts/GlobalContext";

import "../user/style.css";

type Props = {};

const Index = (props: Props) => {
  const { user, signIn } = useContext(GlobalContext);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(state.email, state.password);
    try {
      signIn(state.email, state.password);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("user", user);
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
