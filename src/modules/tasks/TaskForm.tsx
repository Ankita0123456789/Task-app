import { useState } from 'react'
import { Buttons, INput } from '../../components/index'
import { Col, Form } from 'react-bootstrap'

type Props = {}

const getTasks=()=>{
  const data = localStorage.getItem('tasks');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

const TaskForm = (props: Props) => {
  const [tasks, setTasks] = useState(getTasks())
  const [state, setState] = useState({
    title: "",
    description: "",
    date: "",
    status: ""
  });

  
    const handleSubmit = (e:React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setTasks({
          ...tasks, state 
        })
    }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.title]: e.target.value });
  };

  return (
    <Col className='text-center border p-3 py-5' xs={12} md={8} lg={4}>
      <Form>
        <h3 className='mb-5'>Add Tasks</h3>
        <INput name='title' value={state.title} onChange={handleChange} LabelName='Title' type='text' />
        <INput name='description' value={state.description} onChange={handleChange} LabelName='Description' type='text' />
        <INput name='date' value={state.date} onChange={handleChange} LabelName='Date' type='date' />
        <INput name='status' value={state.status} onChange={handleChange} LabelName='Status' type='text' />
        <Buttons type="submit" name="Add Tasks" onClick={handleSubmit} />
      </Form>
    </Col>
  )
}

export default TaskForm