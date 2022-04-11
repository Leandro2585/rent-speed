import React from 'react'
import styled from 'styled-components/native'

import { Header, ItemInfo } from '@application/components/molecules'

export const HeaderPage = () => {
  return (
    <HeaderPageContainer>
      <Header />
      <ItemInfo label='Mitsubishi' title='Lancer Evo X'/>
      <ItemInfo label='Mitsubishi' title='Lancer Evo X' hasContrast/>

      <ItemInfo label='Mitsubishi' title='Lancer Evo X'/>
      <ItemInfo label='Mitsubishi' title='Lancer Evo X' hasContrast/>
      <ItemInfo label='Mitsubishi' title='Lancer Evo X' hasContrast/>
    </HeaderPageContainer>
  )
}

export const HeaderPageContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`