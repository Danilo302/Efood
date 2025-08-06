import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.red};
  color: ${colors.white};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }
`
export const ItemCart = styled.li`
  display: flex;
  background-color: ${colors.white};
  color: ${colors.red};
  padding: 8px;
  margin-bottom: 16px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    div {
      display: flex;
      justify-content: flex-end;
    }
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
  }

  > img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    margin-bottom: 4px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    > img {
      margin-right: 4px;
    }

    > div {
      align-items: center;
      text-align: center;

      div {
        justify-content: center;
      }

      h4 {
        font-size: 16px;
      }
    }
  }
`
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0 16px;
  font-size: 14px;
  font-weight: 700;
`
