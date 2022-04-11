import styled from 'styled-components/native'

export const CarImage: React.FC = () => {
  return <CarImageContainer source={{ uri: '../../assets/svgs/car.svg' }}/>
}

const CarImageContainer = styled.Image`
  width: 167px;
  height: 65px;
`