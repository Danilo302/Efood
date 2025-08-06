import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.white};
  color: ${colors.red};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  font-size: 10px;
  text-align: center;

  p {
    max-width: 480px;
  }
`
export const Icons = styled.div`
  margin-top: 32px;
  margin-bottom: 80px;

  img {
    margin: 0 4px;
  }
`
