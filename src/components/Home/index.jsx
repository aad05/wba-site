import React from 'react'
import {Container,Wrapper,Main} from './style'
import Result_Bar from './Result_Bar'
export default function Home() {
    return (
        <Main>
            <Container>
                <Wrapper>
                    <Result_Bar />
                </Wrapper>
            </Container>
        </Main>
    )
}
