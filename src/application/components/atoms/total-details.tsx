import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

type Props = {
  quantity: number
}

export const TotalDetails: React.FC<Props> = ({ quantity }) => {
  return (
    <TotalDetailsText>Total de {quantity} carros</TotalDetailsText>
  )
}

export const TotalDetailsText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.inter400};
  color: ${({ theme }) => theme.colors.text};
`
