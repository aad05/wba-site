import styled from "styled-components";

export const Wrapper = styled.div ` 
    background: #E6E7EE;
    box-shadow: -6px -6px 6px rgba(255, 255, 255, 0.64), 3px 3px 5px rgba(13, 39, 80, 0.2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({hover})=> hover && `
        :hover {
            box-shadow: inset -8px -8px 20px rgba(255, 255, 255, 0.64), inset 8px 8px 20px rgba(13, 39, 80, 0.16);
        }
    `}
    cursor: pointer;
`
export const Image = styled.img ``   