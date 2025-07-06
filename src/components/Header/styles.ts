import styled from 'styled-components'
import { cores } from '../../styles'

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
  color: ${cores.red};
  font-weight: 900;
  margin-top: 154px;
`
