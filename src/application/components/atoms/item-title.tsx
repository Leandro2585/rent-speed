import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

type Props = {
  text: string,
  contrast?: boolean
}

export const ItemTitle: React.FC<Props> = ({ text }) => {
  return <ItemTitleText>{text}</ItemTitleText>
}

const ItemTitleText = styled.Text<Omit<Props, 'text'>>`
  font-size: ${RFValue(16)}px;
  color: ${(props) => props.contrast ? props.theme.colors.primary: props.theme.colors.title};
`
