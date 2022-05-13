import { ADD_JOB, DEL_JOB, SET_AMOUNT, SET_DATE, SET_FALSE, SET_NAME, DOWN_JOB } from "./constans"
import { postApi, delApi } from '../data'
 const initialsValue = {
    job: {
        name: '',
        amount: '',
        date: '',
    },
    jobs: [],
    isTrue: true
}
const Reducer = (state, action) => {
    const api = 'https://db-fake-api.herokuapp.com/expense'
    switch(action.type) {
        case SET_FALSE:
            return {...state, isTrue: !state.isTrue}
        case SET_NAME:
            return {
                ...state,
                job: {
                    ...state.job,
                    name: action.payload
                }
            }
            case SET_AMOUNT:
                return {
                    ...state,
                    job: {
                        ...state.job,
                        amount: action.payload
                    }
                }

            case SET_DATE:
                return {
                    ...state,
                    job: {
                        ...state.job,
                        date: action.payload
                    }
                }

            case ADD_JOB:
                const {job, id} = action
                const data = {
                    name: job.name,
                    amount: +job.amount,
                    date: job.date, 
                    id
                }
                postApi(api, data)
                return {
                    ...state,
                    jobs: [...state.jobs, data]
                }
            case DEL_JOB:
               delApi(api, action.payload)
                return {
                    ...state,
                    jobs: state.jobs.filter(e => e.id !== action.payload)
                }
            case DOWN_JOB:
                return {
                    ...state,
                    jobs: [...action.payload]
                }
        default: throw new Error('Wrong with somethings...')
    }
}
export default Reducer
export { initialsValue }
