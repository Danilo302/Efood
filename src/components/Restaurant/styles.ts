import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  color: ${cores.red};
  position: relative;

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`
export const Info = styled.div`
  border: 1px solid ${cores.red};
  border-top: none;
  padding: 8px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      margin-left: 8px;
    }
  }
`
export const Title = styled.h4`
  font-size: 18px;
`
export const Description = styled.p`
  margin: 16px 0;
  font-size: 14px;
  line-height: 1.5;
`

export const Tags = styled.ul`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;

  li {
    margin-left: 8px;
  }
`
