import React from 'react'
import logo from "../../asserts/logo-dio.png"
import { Button } from '../button';
import { 
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture
} from './styles';


const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO"/>
                    {autenticado ? (<>
                        <BuscarInputContainer>
                        <Input placeholder="Buscar"/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>) : null }
                    
                </Row>
                <Row>
                    {autenticado ? (
                        <>
                            <UserPicture src="https://avatars.githubusercontent.com/u/49123089?s=40&v=4"/>
                        </>
                    ) : (<>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar"/>
                        <Button title="Cadastrar"/>
                    
                    </>) }
                    
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }