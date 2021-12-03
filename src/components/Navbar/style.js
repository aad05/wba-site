import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const Wrapper = styled.div ` 
    width: 100%;
    display: flex;
    background: #E6E7EE;
    box-shadow: 0px 4px 20px rgba(13, 39, 80, 0.1);
    height: 90px;
`
export const Container = styled.div `
    width: 90%;
    margin: auto;
`
export const Left = styled.div ``
export const Betwen = styled.div `
    display: flex;
    width: 500px;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1100px) {
    width: 450px;
  }
  @media (max-width: 1000px) {
    width: 400px;
  }
`
export const Right = styled.div ``
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
    @media (max-width: 1100px) {
    height: 44px;
    }
    @media (max-width: 1000px) {
    width: ${({longer})=> longer ? "123px":"71px"};
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
`;
export const Item = styled.div `
    font-family: 'Noto Sans Old Italic', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 26px;
    color: #31344B;
    cursor: pointer;
`
export const Floater = styled.div `
    display: flex;
    justify-content: space-around;
`
export const Title = styled.div ` 
    font-family: 'Noto Sans Old Italic', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 26px;
    color: #2D4CC8;
`
export const Link = styled(NavLink)`
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 26px;
    color: #31344B;
    transition: all 0.3s;
    text-decoration: none;
`;
export const activeStyle = {
    color: "#2D4CC8"
  };