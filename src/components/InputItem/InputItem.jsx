import React from 'react'
import { useStore } from '../../stores'
import { setName, setAmount, setDate, addJob, SET_FALSE } from '../../stores'
import * as CM from '../style/common'
import * as SC from './style'
const InputItem = () => {
    const [state, dispatch] = useStore()
    const {job, jobs} = state
    const {name, amount, date} = job
    console.log(state)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(job.name === '' || job.amount === '' || job.date === '') {
            return alert ('Please enter in full fill !')
        }
        const id = Math.random().toString(15).substring(5);
        dispatch(addJob(job, id))
        dispatch(setName(''))
        dispatch(setAmount(''))
        dispatch(setDate(''))
    }
  return (
          <CM.wrapContent>
            <SC.Form >
                <SC.Item>
                    <SC.Lable>Name</SC.Lable>
                    <SC.Input 
                        type='text' 
                        placeholder='Enter name here...' 
                        value={name}
                        onChange={(e)=> dispatch(setName(e.target.value))}
                    />
                </SC.Item>
                <SC.Item>
                    <SC.Lable>Amount</SC.Lable>
                    <SC.Input 
                        type='number' 
                        placeholder='Enter amount here...' 
                        value={amount}
                        onChange={(e)=> dispatch(setAmount(e.target.value))}
                    />
                </SC.Item>
                <SC.Item>
                    <SC.Lable>Date</SC.Lable>
                    <SC.Input 
                        type='date' 
                        value={date}
                        onChange={(e)=> dispatch(setDate(e.target.value))}
                    />
                </SC.Item>
                <SC.GroupButton>
                    <CM.Button  
                        bgc='#862796' 
                        pd='5px' 
                        bdr='8px' 
                        mg='0 5px 0 0'
                        onClick={handleSubmit}
                    >
                        ADD
                    </CM.Button>
                    <CM.Button 
                        color='#000' 
                        bgc= '#ccc' 
                        pd='5px' 
                        bdr='8px'
                        onClick={(e) => {
                            e.preventDefault()
                            dispatch({type: SET_FALSE})
                        }}
                    >
                        CANCLE
                    </CM.Button>
                </SC.GroupButton>
            </SC.Form>
          </CM.wrapContent>
  )
}

export default InputItem