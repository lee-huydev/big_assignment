import { SET_AMOUNT, SET_DATE, SET_NAME, ADD_JOB, DEL_JOB, DOWN_JOB } from './constans'

export const setName = payload => {
    return {type: SET_NAME, payload}
}
export const setAmount = payload => {
    return {type: SET_AMOUNT, payload}
}
export const setDate = payload => {
    return {type: SET_DATE, payload}
}
export const addJob = (job , id) => {
    return {type: ADD_JOB, job, id}
}
export const delJob = payload => {
    return {type: DEL_JOB, payload}
}
export const downJob = payload => {
    return {type: DOWN_JOB, payload}
}
