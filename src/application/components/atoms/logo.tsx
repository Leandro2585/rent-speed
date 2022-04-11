import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

import LogoSVG from '@application/assets/svg/logo.svg'

export const Logo: React.FC = () => {
  return (
    <LogoSVG style={{ width: RFValue(108), height: RFValue(12) }}/>
  )
}