import React from 'react' 
import { Wrapper, WrapperCard } from './style'
import Result_Card from '../../Cards/Result_Card'
import vector from '../../../assets/icons/Vector.png'
import student from '../../../assets/icons/student.png'
import instructor from '../../../assets/icons/instructor 1.png'

export default function Result_Bar (){
    return (
        <Wrapper>
                <WrapperCard>
                    <Result_Card src={vector} number={200} type="Special Courses" />
                    <Result_Card src={student} number={450} type="Enrolled Students" />
                    <Result_Card src={instructor} number={10} type="Expert Instructors" />
                </WrapperCard>
        </Wrapper>
    )
}