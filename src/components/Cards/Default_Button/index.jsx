import React from 'react'
import { Wrapper,Title } from './style'

export default function Button({width,height,children,hover,cursor,color,size}) {
    return (
        <Wrapper cursor={cursor} hover={hover} style={{width:`${width}`,height:`${height}`,color: `${color}`,fontSize:`${size}`}}>
            <Title>{children}</Title>
        </Wrapper>
    )
}
