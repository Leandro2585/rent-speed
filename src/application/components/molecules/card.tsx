import React from 'react'
import styled from 'styled-components/native'

export const Card: React.FC = ({ children }) => {
  return (
    <CardContainer>{children}</CardContainer>
  )
}

const CardContainer = styled.View`
  width: 100%;
  height: 126px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  margin-bottom: 16px;
`