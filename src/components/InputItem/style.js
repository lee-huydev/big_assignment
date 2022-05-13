import styled from "styled-components";

export const Form = styled.form `
    width: 100%;
`
export const Item = styled.div `
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Lable = styled.label `
    min-width: 100px;
    text-align: left;
    color: white;
    font-family: 'Dosis', sans-serif;
`
export const Input = styled.input `
    flex: 1;
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    outline: none;
`
export const GroupButton = styled.div `
    margin: 25px 0 10px;
    display: flex;
    justify-content: flex-end
`