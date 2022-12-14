import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import bannerImg from '../../asserts/banner.png';
import { Container, TextContent, Title, TitleHighlight } from './styles';

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header/>
        <Container>
            <div>
                <Title> <TitleHighlight> Implemente <br/></TitleHighlight> o seu futuro global agora!</Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadores do mundo e encare seu novo desafio profissional, evoluindo com os melhores experts.
                </TextContent>
                <Button title="Começar" variant="secondary" onClick={handleClickSignIn} type="button"/>
            </div>
            <div>
                <img src={ bannerImg } alt="banner"/>
            </div>
        </Container>
    </>)
}

export { Home }