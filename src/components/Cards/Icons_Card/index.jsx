import React from 'react'
import { Image, Wrapper } from './style'

export default function Icons_Card({width, height,hover,src}) {
    return (
        <Wrapper hover={hover} style={{width: `${width}px`, height: `${height}px`}}>
            <Image src={src} />
        </Wrapper>
    )
}
