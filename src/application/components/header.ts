import styled from 'styled-components/native'

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
`

export const HeaderContent = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px;
  flex-direction: row;
`