import React from 'react'
import styled from 'styled-components/native'

import { Label, ItemTitle } from '@application/components/atoms'

type Props = {
  label: string
  title: string
  hasContrast?: boolean
}

export const ItemInfo: React.FC<Props> = ({ label, title, hasContrast = false }) => {
  return (
    <ItemInfoContainer>
      <Label text={label}/>
      <ItemTitle text={title} contrast={hasContrast}/>
    </ItemInfoContainer>
  )
}

const ItemInfoContainer = styled.View`
  height: 32px;  
`