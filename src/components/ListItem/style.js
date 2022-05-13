import styled from "styled-components";

export const WrapItem = styled.div `
    padding: 10px 15px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #575757;
    border-radius: 15px;
`

export const Day = styled.div `
    color: white;
    margin-right: 20px
`
export const Text = styled.h3 `
    color: white;
    flex: 1;
    text-align: left;
    padding: 10px 0 12px;
`

export const Price = styled.span `
    color: white;
    padding: 10px;
    background-color: #862796;
    border-radius: 10px;
`
export const Icon = styled.span `
    color: white;
    font-size: 20px;
    margin-left: 10px;
    &:hover {
        color: red;
        cursor: pointer;
    }
`