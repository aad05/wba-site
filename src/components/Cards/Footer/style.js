import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Main = styled.div ` 
    width: 100%;
`
export const Container = styled.div ` 
    width: 90%;
    margin: auto;
`
export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
`
export const Top = styled.div ` 
    display: flex;
    width: 100%;
    justify-content: space-around;
    height: 200px;
`
export const Bottom = styled.div `
margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const First = styled.div `
    flex: 2;
    display: flex;
    flex-direction: column;
`
export const Second = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;


`
export const Third = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const Fourth = styled.div `
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const Paragraph = styled.div ` 
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 26px;
    color: #31344B;
`
export const IconsWrapper = styled.div ` 
    display: flex;
    margin-top: 20px;
    width: 200px;
    justify-content: space-around;
    @media(max-width: 1000px){
        width: 150px;
    }
`
export const TextWrapper = styled.div `
    width: 400px;
    @media(max-width: 1000px){
        width: 300px;
    }
`
export const Title = styled.div ` 
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    color: #31344B;
`
export const Input = styled.input ` 
    background: #E6E7EE;
    box-shadow: inset -5px -5px 8px rgba(255, 255, 255, 0.64), inset 5px 5px 8px rgba(13, 39, 80, 0.16);
    border-radius: 8px;
    outline: none;
    border: none;
    width: 80%;
    height: 44px;
    padding-left: 16px;
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 26px;
        color: rgba(49, 52, 75, 0.6);
    ::placeholder{
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 26px;
        color: rgba(49, 52, 75, 0.6);
    }
`
export const HR = styled.hr ` 
    width: 80%;
    margin: auto;
    color: #D1D9E6;
    opacity: .2;
    margin-top: 30px;
`   
export const Button = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E6E7EE;
    box-shadow: -5px -5px 8px #FFFFFF, 5px 5px 8px rgba(13, 39, 80, 0.16);
    border-radius: 8px;
    width: ${({longer})=> longer ? "143px":"71px"};
    height: 54px;
    cursor: pointer;
    transition: all 0.7s;
    @media (max-width: 1300px) {
    width: ${({longer})=> longer ? "123px":"71px"};
    }
    @media (max-width: 1200px) {
    height: 44px;
    width: ${({longer})=> longer ? "113px":"71px"};
    }
    @media (max-width: 1000px) {
    width: ${({longer})=> longer ? "103px":"71px"};
    height: 37px;
    }
    @media (max-width: 900px) {
    width: ${({longer})=> longer ? "93px":"71px"};
    }
    :hover {
        box-shadow: inset -8px -8px 20px rgba(255, 255, 255, 0.64), inset 8px 8px 20px rgba(13, 39, 80, 0.16);
    }
`
export const Icon = styled.div`
    color: blue;
    font-style: normal;
    font-weight: 900;
    font-size: 27px;
    line-height: 32px;
    transition: all .3s;
    @media (max-width: 1200px) { 
        font-size: 25px;
    }
`;
export const Linked = styled(Link)`
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 26px;
    color: #31344B;
    transition: all 0.3s;
    text-decoration: none;
    padding-bottom: 20px;
`;