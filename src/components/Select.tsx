import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

type Props = {
  LabelName: string;
  value?: any;
  onChange?: any;
  name: string;
  id?: any;
  options: { name: string }[];
};

const Select = ({ LabelName, onChange, name, id, options }: Props) => {
  return (
    <FloatingLabel controlId={id} label={LabelName} className="mb-3">
      <Form.Select
        onChange={onChange}
        aria-label="Default select example"
        name={name}
      >
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Form.Select>
    </FloatingLabel>
  );
};

export default Select;
