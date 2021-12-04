import styled from "styled-components";

export const Wrapper = styled.div ` 
    background: #E6E7EE;
    box-shadow: -5px -5px 8px #FFFFFF, 5px 5px 8px rgba(13, 39, 80, 0.16);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${({cursor})=> cursor && "pointer"};
    transition: all .7s;
    ${({hover})=> hover && `
        :hover {
            box-shadow: inset -8px -8px 20px rgba(255, 255, 255, 0.64), inset 8px 8px 20px rgba(13, 39, 80, 0.16);
        }
    `}
`
export const Title = styled.div ` 
    font-style: normal;
    font-weight: normal;
    line-height: 26px;
`