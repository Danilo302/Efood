import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${cores.red};
  padding: 40px 0 64px 0;
  font-weight: bold;

  h3 {
    color: ${cores.red};
  }
`
export const ImgContainer = styled.div`
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
  font-size: 24px;

  h2 {
    font-weight: 100;
    margin-bottom: 156px;
    padding-top: 24px;
  }

  h1 {
    padding-bottom: 32px;
  }
`
