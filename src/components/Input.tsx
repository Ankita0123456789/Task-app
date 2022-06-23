import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

type Props = {LabelName: string, type: string, value?:any, onChange?: any}

const INput = ({LabelName, type, value, onChange}: Props) => {
  return (
    <>
 <FloatingLabel
        controlId="floatingInput"
        label={LabelName}
        className="mb-3"
      >
        <Form.Control type={type} value={value} onChange={onChange} placeholder="name@example.com" required />
      </FloatingLabel>
    </>
  )
}

export default INput