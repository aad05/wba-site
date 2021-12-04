import React from 'react'
import { Container } from '../../Home/style'
import { Bottom, Button, First, Fourth, HR, Icon,Linked, IconsWrapper, Input, Main, Paragraph, Second, TextWrapper, Third, Title, Top, Wrapper } from './style'
import Icons_Card from '../../Cards/Icons_Card'
import Faceebok from '../../../assets/icons/Facebook.svg'
import GitHub from '../../../assets/icons/Github.svg'
import Google from '../../../assets/icons/Google.svg'
export default function Footer() {
    return (
        <Main>
            <Wrapper>
                <Container>
                    <Top>
                        <First>
                            <TextWrapper>
                                <Paragraph>Neumorphism UI PRO is a premium Bootstrap UI Kit built based on the newest design trend called Neumorphism.</Paragraph>
                            </TextWrapper>
                            <IconsWrapper>
                                <Icons_Card src={Faceebok} width="40" height="40" hover={true} />
                                <Icons_Card src={Google} width="40" height="40" hover={true}  />
                                <Icons_Card src={GitHub} width="40" height="40" hover={true} />
                            </IconsWrapper>
                        </First>
                        <Second>
                            <Title>WebBrain</Title>
                            <Paragraph>Team</Paragraph>
                            <Paragraph>Partners</Paragraph>
                            <Paragraph>Lessons</Paragraph>
                            <Paragraph>About us</Paragraph>
                        </Second>
                        <Third>
                            <Title>Others</Title>
                            <Paragraph>Dosc</Paragraph>
                            <Paragraph>Changelog</Paragraph>
                            <Paragraph>Licence</Paragraph>
                            <Paragraph>Support</Paragraph>
                        </Third>
                        <Fourth>
                        <Title>Others</Title>
                        <Paragraph>Join our mailing list. We write rarely, but only the best content</Paragraph>
                        <Input placeholder="example@company.com" />
                        </Fourth>
                    </Top>
                    <HR />
                    <Bottom>
                    <Linked to="/">
                        <Button><Icon>WB</Icon></Button>
                    </Linked>
                    <Paragraph>Copryright &copy; WebBarin 2021. All rights reserved</Paragraph>
                    </Bottom>
                </Container>
            </Wrapper>
        </Main>
    )
}
