import React from 'react'
import { Box, Circle, Word, Img } from "./style";

export const Result_Card = ({number,type,src}) => {
    return (
        <>
        <Box>
          <Circle>
            <Img src={src} alt="icons" />
          </Circle>
          <div>
            <Word large>{number}+</Word>
            <Word>{type}</Word>
          </div>
        </Box>
        </>
    )
}
export default Result_Card