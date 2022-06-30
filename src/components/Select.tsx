import React from 'react'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";


type Props = {
  LabelName: string;
  value?: any;
  onChange?: any;
  name: string;
  id?: any;
}

const Select = ({LabelName,value, onChange, name, id}: Props) => {
  return (
    <FloatingLabel
    controlId={id}
    label={LabelName}
    className="mb-3"
  >
    <Form.Select onChange={onChange} aria-label="Default select example">
    <option>Set Status</option>
    <option value={value}>{name}</option>
    <option value={value}>{name}</option>
    <option value={value}>{name}</option>
  </Form.Select>
  </FloatingLabel>
  )
}

export default Select