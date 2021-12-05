import React from 'react';
import { Container, HomePage, Text, Lorem, Button, Input, Search, Omg, HomePageFon, ContainerPage } from './style'

export default function Home() {
    return (
        <Container>
            <HomePageFon>
                <HomePage>
                    <ContainerPage>
                        <Text>
                            <h1>Find our best courses & Become the master</h1>
                            <Lorem>Lorem ipsum dolor sit, amet citiis ab dolor repellendus cumque assumenda? Asperiore
                            </Lorem>
                            <Search>
                                <Input placeholder='Search your courses'></Input>
                                <Button>Search</Button>
                            </Search>
                        </Text>
                    </ContainerPage>
                </HomePage>
            </HomePageFon>
        </Container>
    )
}
