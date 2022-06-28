import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

type Props = {
  LabelName: string;
  type: string;
  value?: any;
  onChange?: any;
  name: string;
  id?: any;
  defaultValue?: any;
};

const INput = ({ LabelName, type, defaultValue,value, onChange, name, id }: Props) => {
  return (
    <>
      <FloatingLabel
        controlId={id}
        label={LabelName}
        className="mb-3"
      >
        <Form.Control
          name={name}
          type={type}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          placeholder="name@example.com"
          required
        />
      </FloatingLabel>
    </>
  );
};

export default INput;
