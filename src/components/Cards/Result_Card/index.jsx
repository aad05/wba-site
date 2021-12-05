import React, {useState} from 'react'
import { Box, Circle, Word, Img } from "./style";
import CountUp from 'react-countup';

export const Result_Card = ({number,type,src}) => {
  const [count,setCount] = useState(1)

  // setInterval(()=>{
  //   setCount(count +1)
  // },10)

    return (
        <>
        <Box>
          <Circle>
            <Img src={src} alt="icons" />
          </Circle>
          <div>
            <Word large={true}><CountUp start={0} duration={3} end={parseInt(number)} />+</Word>
            <Word>{type}</Word>
          </div>
        </Box>
        </>
    )
}
export default Result_Card