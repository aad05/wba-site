import React from 'react' 
import {Betwen, Container, Left, Right, Wrapper,Button,Icon,Item,Floater,Title,Link,activeStyle, Buttonmain} from './style'
import {Navbarpath} from '../../utils/path'
export const Navbar = () =>{
    return (
        <Wrapper>
            <Container>
                <Floater>
                <Left>
                    <Link to="/">
                        <Button><Icon>WB</Icon></Button>
                    </Link>
                </Left>
                <Betwen>
                {Navbarpath.map(({ id, title, path }) => {
                return (
                        <Item key={id}>
                        <Link exact activeStyle={activeStyle} to={path}>
                            {title}
                        </Link>
                        </Item>
                );
                })}
                </Betwen>
                <Right>
                    <Button longer={true}><Title>Log In</Title></Button>
                </Right>
                </Floater>
            </Container>
        </Wrapper>
    )
}
export default Navbar