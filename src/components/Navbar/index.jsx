import React from 'react' 
import {Betwen, Container, Left, Right, Wrapper,Button,Item,Floater,Title,Link,activeStyle, Buttonmain, ResponsiveWrapper} from './style'
import {Navbarpath} from '../../utils/path'
export const Navbar = () =>{
    return (
        <Wrapper>
            <Container>
                <Floater>
                <Left>
                        <Link to="/">
                            <Button logo={true}>WB</Button>
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
                        <Link to={"/logIn"}><Button longer={true}>Log In</Button></Link>
                </Right>
                </Floater>
            </Container>
        </Wrapper>
    )
}
export default Navbar