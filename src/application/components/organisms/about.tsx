import React from 'react'
import styled from 'styled-components/native'

import { GasIcon } from '@application/components/atoms'
import { ItemInfo, Card } from '@application/components/molecules'

type Props = {}

export const About: React.FC<Props> = () => {
  return (
    <Card>
      <ItemInfo label='PORSCHE' title='Panamera'/>
      <AboutContainer>
        <ItemInfo label='Ao dia' title='R$ 120,00' hasContrast/>
        <Type>
          <GasIcon/>
        </Type>
      </AboutContainer>
    </Card>
  )
}

const AboutContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`

const Type = styled.View`

`