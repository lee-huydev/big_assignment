import { useReducer } from 'react'
import Reducer, { initialsValue } from './Reducer';
import Context from "./Context";

const Provider = ({children}) => {
    const [ state, dispatch ] = useReducer(Reducer, initialsValue)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider