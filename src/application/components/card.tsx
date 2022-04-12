import React from 'react'
import styled, { css } from 'styled-components/native'
import GasSVG from '@application/assets/svg/gasoline.svg'
import { RFValue } from 'react-native-responsive-fontsize'

export const Card: React.FC = () => {
  return (
    <CardContainer>
      <InfoSection>
        <Details>
          <Label>Audi</Label>
          <Title>RS 5 Coupé</Title>
        </Details>
        <Details>
          <Label>AO DIA</Label>
          <Title contrast>R$ 124,90</Title>
        </Details>
        <GasSVG/>
      </InfoSection>
      <ImageSection source={{ uri: '../assets/png/audi.png' }}/>
    </CardContainer>
  )
}

export const CardContainer = styled.View`
  width: 100%;
  height: 126px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
`

export const InfoSection = styled.View``

export const ImageSection = styled.Image``

export const Details = styled.View`
  height: 32px;
`

export const Label = styled.Text`
  font-size: ${RFValue(10)};
  font-family: ${({ theme }) => theme.fonts.arch500};
  color: ${({ theme }) => theme.colors.details};
`

export const Title = styled.Text<{ contrast?: boolean }>`
  font-size: ${RFValue(15)};
  font-family: ${({ theme }) => theme.fonts.arch500};
  ${props => 
    props.contrast ? css` color: ${props.theme.colors.primary} ` : css`color: ${props.theme.colors.title}`
  }
`