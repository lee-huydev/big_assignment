import styled from "styled-components";

export const Container = styled.div `
    width: 1024px;
    max-width: 100%;
    margin: 50px auto;
`
export const wrapContent = styled.div`
    width: 500px;
    margin: 20px auto;
    border-radius: 10px;
    background-color: ${({bgc})=> bgc || '#897BDA'};
    text-align: center;
    padding: 20px;
`
export const Button = styled.button `
    color: ${({color}) => color || 'white' };
    background-color: ${({bgc})=> bgc || 'white'};
    font-size: 16px;
    padding: ${({pd}) => pd || '10px 10px'};
    border-radius: ${({bdr})=> bdr || '0'};
    border: none;
    margin: ${({mg}) => mg || ''};
    transition: .2s;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
        transform: translateY(-3px)
    }
    &:active {
        transform: translateY(-1px)
    }
`