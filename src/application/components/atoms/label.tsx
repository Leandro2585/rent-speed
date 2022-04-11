import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

type Props = {
  text: string
}

export const Label: React.FC<Props> = ({ text }) => {
  return <LabelText>{text}</LabelText>
}

const LabelText = styled.Text`
  color: ${({ theme: { colors }}) => colors.label};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme: { fonts }}) => fonts.arch500};
  text-transform: uppercase;
`
