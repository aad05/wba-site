import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// Wrapper Styling
export const Wrapper = styled.div ` 
    width: 100%;
    display: flex;
    background: #E6E7EE;
    box-shadow: 0px 4px 20px rgba(13, 39, 80, 0.1);
    height: 70px;
`
export const Container = styled.div `
    width: 80%;
    margin: auto;
`
// End Wrapper Styling
export const Floater = styled.div `
    display: flex;
    justify-content: space-between;
`
// Sections 3 divs
export const Left = styled.div `
    display: flex;
    align-items: center;
`
export const Betwen = styled.div `
    width:60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Right = styled.div `
    display: flex;
    align-items: center;
`
// End Sections
export const Item = styled.div `
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 26px;
    color: #31344B;
    cursor: pointer;
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
    font-size: 17px;
    line-height: 26px;
    color: #31344B;
    text-decoration: none;
`;
export const activeStyle = {
    color: "#2D4CC8"
};
  export const Button = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E6E7EE;
    box-shadow: -5px -5px 8px #FFFFFF, 5px 5px 8px rgba(13, 39, 80, 0.16);
    border-radius: 8px;
    width: ${({longer})=> longer ? "143px":"71px"};
    height: 40px;
    cursor: pointer;
    color: blue;
    ${({logo})=>logo &&`
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
    `}
    /* Media Queries start */
    @media (max-width: 1300px) {
    width: ${({longer})=> longer ? "123px":"71px"};
    }
    @media (max-width: 1200px) {
    height: 40px;
    width: ${({longer})=> longer ? "113px":"71px"};
    }
    @media (max-width: 1000px) {
    width: ${({longer})=> longer ? "93px":"61px"};
    height: 30px;
    }
    @media (max-width: 900px) {
    width: ${({longer})=> longer ? "93px":"71px"};
    }
    /* Media Queries end */
    :hover {
        box-shadow: inset -8px -8px 20px rgba(255, 255, 255, 0.64), inset 8px 8px 20px rgba(13, 39, 80, 0.16);
    }
`