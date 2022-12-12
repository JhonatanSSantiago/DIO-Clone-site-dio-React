import { Link } from 'react-router-dom';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import bannerImg from '../../asserts/banner.png';
import { Container, TextContent, Title, TitleHighlight } from './styles';

const Home = () => {
    return (<>
        <Header/>
        <Container>
            <div>
                <Title> <TitleHighlight> Implemente <br/></TitleHighlight> o seu futuro global agora!</Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadores do mundo e encare seu novo desafio profissional, evoluindo com os melhores experts.
                </TextContent>
                <Button title="Começar" variant="secondary" onclick={()=> null}/>
            </div>
            <div>
                <img src={ bannerImg } alt="banner"/>
            </div>
        </Container>
    </>)
}

export { Home }