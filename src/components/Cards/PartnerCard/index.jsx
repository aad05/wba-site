import React from 'react' 
import { ButtonWrapper, Container, Description, Image, Wrapper } from './style'
import Default_Button from '../../Cards/Default_Button'
import Paypal from '../../../assets/imgs/paypal.png'
export const OurPartner = ({description,src,button_text})=>{
    return (
        <Wrapper>
            <Container>
                <Image alt="Icon OurPartner" src={src}  />
                <Description>
                {description}
                </Description>
                <ButtonWrapper>
                    <Default_Button hover={true} cursor={true} width="170px" height="50px" color="#31344B" weight="100" size="17px" >{button_text}</Default_Button>
                </ButtonWrapper>  
            </Container>
        </Wrapper>
    )
}
export default OurPartner