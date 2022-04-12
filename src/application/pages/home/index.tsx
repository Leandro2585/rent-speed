import React from 'react'

import { Card, CardsList, Header, HeaderContent } from '@application/components'
import LogoSVG from '@application/assets/svg/logo.svg'
import { Container, TotalCars } from './style'
import { RFValue } from 'react-native-responsive-fontsize'

export const Home = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
        <LogoSVG width={RFValue(108)} height={RFValue(12)}/>
        <TotalCars>Total de 14 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CardsList>
        <Card/>
      </CardsList>
    </Container>
  )
}