import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { MeetingIF } from './interfaces'

type Props = {}

const Meeting = (props: Props) => {
  const Params = useParams();
  const {id} = Params;

  console.log(Params)
  // const [state, setState] = useState<MeetingIF>();

  useEffect(()=>{
      const meeting:any = JSON.parse(localStorage.getItem('meetings') as string)?.filter((m:any) => m.id === Number(id))
      console.log(meeting)
  }, [id])
     

  return (
    <div>meeting</div>
  )
}

export default Meeting