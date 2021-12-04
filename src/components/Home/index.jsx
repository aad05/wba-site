import React from 'react'
import Result_Card from '../../components/Cards/Result_Card'
import Vector from '../../assets/icons/Vector.png'
import Instructor from '../../assets/icons/instructor 1.png'
import Studen from '../../assets/icons/1-student.png'
import {Container,Wrapper} from './style'

export default function Home() {
    return (
        <Container>
            <Wrapper>
                <Result_Card  src={Vector} number="200" type="Special courses" />
                <Result_Card  src={Studen} number="450" type="Enrolled students" />
                <Result_Card  src={Instructor} number="10" type="Expert instructor"/>
            </Wrapper>
            </Container>
    )
}
