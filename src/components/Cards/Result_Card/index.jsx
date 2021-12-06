import React, {useState,useEffect} from 'react'
import { Box, Circle, Word, Img } from "./style";

const Result_Card = ({number,type,src}) => {
  const [count,setCount] = useState(1)

  const changeNumber = ()=>{
    if(count < number){
      setTimeout(() => {
        setCount(count +1)
      }, 5);
    }
  }
  useEffect(()=>{
    changeNumber()
  },[count])
    return (
        <>
        <Box>
          <Circle>
            <Img src={src} alt="icons" />
          </Circle>
          <div>
            <Word large={true}>{count}+</Word>
            <Word>{type}</Word>
          </div>
        </Box>
        </>
    )
}
export default Result_Card