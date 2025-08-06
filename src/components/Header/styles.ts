import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  div {
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }
`
export const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  color: ${colors.red};
  font-weight: 900;
  margin-top: 154px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
    margin-top: 100px;
    padding: 0 20px;
  }
`
