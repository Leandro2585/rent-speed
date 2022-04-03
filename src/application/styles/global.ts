import { createStitches } from 'stitches-native'

export const { styled } = createStitches({
  theme: {
    colors: {
      primary: '#DC1637',
      headline: '#FFFFFF',
      title: '#47474D',
      text: '#FFFFFF',
      details: '#AEAEB3',
      shape: '#7A7A80'
    }
  }
})

export const Container = styled('View', {
  width: 300,
  height: 300,
  backgroundColor: '$primary',
})