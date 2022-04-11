import React from 'react'
import styled from 'styled-components/native'

import { Logo, TotalDetails } from '@application/components/atoms'

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <TotalDetails quantity={12}/>
    </HeaderContainer>
  )
}

export const HeaderContainer = styled.View`
  width: 100%;
  height: 116px;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px 0px 32px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.header};
`
