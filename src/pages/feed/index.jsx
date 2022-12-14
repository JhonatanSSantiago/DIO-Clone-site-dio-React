import React from 'react'
import { Card } from '../../components/card';
import { UserInfo } from '../../components/userinfo';

import { Header } from '../../components/header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Jhonatan Santiago" image="https://avatars.githubusercontent.com/u/49123089?s=40&v=4" percentual={95}/>
                <UserInfo nome="Jhonatan Santiago" image="https://avatars.githubusercontent.com/u/49123089?s=40&v=4" percentual={72}/>
                <UserInfo nome="Jhonatan Santiago" image="https://avatars.githubusercontent.com/u/49123089?s=40&v=4" percentual={65}/>
                <UserInfo nome="Jhonatan Santiago" image="https://avatars.githubusercontent.com/u/49123089?s=40&v=4" percentual={50}/>
                <UserInfo nome="Jhonatan Santiago" image="https://avatars.githubusercontent.com/u/49123089?s=40&v=4" percentual={45}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
