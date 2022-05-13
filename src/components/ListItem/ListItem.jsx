import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useStore, delJob } from '../../stores'
import * as CM from '../style/common'
import * as SC from './style'
const ListItem = () => {
    const [state, dispatch] = useStore()
    const { jobs } = state
    console.log(jobs)
  return (
        <CM.wrapContent bgc={'#191919'}>
            {
                jobs.map(e => (
                <SC.WrapItem key={e.id} id={e.id}>
                    <SC.Day>{e.date}</SC.Day>
                    <SC.Text>{e.name}</SC.Text>
                    <SC.Price>{e.amount}</SC.Price>
                    <SC.Icon 
                        id={e.id}
                        onClick={(e)=> dispatch(delJob(e.target.parentNode.id))}
                        >
                        <AiOutlineDelete id={e.id}/>
                    </SC.Icon>
                </SC.WrapItem>
                ))
            }
        </CM.wrapContent>
  )
}

export default ListItem