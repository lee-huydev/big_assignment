import React from 'react'
import * as CM from '../style/common'
import * as SC from './style'
import { useStore, SET_FALSE } from '../../stores'
const AddItem = () => {
  const [state, dispatch] = useStore()
  return (
        <CM.wrapContent>
            <CM.Button color='white' bgc='#862796' bdr='10px' onClick={() => dispatch({type: SET_FALSE})}>
                ADD NEW EXPENSE
              </CM.Button>
        </CM.wrapContent>
  )
}

export default AddItem