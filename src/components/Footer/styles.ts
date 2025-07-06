import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.branco};
  color: ${cores.red};
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
