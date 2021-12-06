import React from 'react'
import {Container,Wrapper,Main} from './style'
import Online_Card from '../Cards/Online_Courses_Card'
export default function Home() {
    return (
        <Main>
            <Container>
                <Wrapper>
                    <Online_Card />
                </Wrapper>
            </Container>
        </Main>
    )
}
