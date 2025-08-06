import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const FoodItem = styled.li`
  background-color: ${colors.red};
  max-width: 320px;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  height: 100%;

  img {
    padding: 8px;
    width: 100%;
    height: 167px;
    display: block;
    object-fit: cover;
  }
`
export const Descripton = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  * {
    margin-bottom: 8px;
  }

  h4 {
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
  }
`
export const Btn = styled.button`
  text-align: center;
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.red};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  cursor: pointer;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  width: 1024px;
  padding: 0 0 32px 32px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.red};
  color: ${colors.white};
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: end;
    padding: 8px;

    img {
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
    padding: 0;
  }
`
export const ModelInfo = styled.div`
  display: flex;
  padding-right: 32px;

  img {
    width: 280px;
    height: 280px;
    margin-right: 24px;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    margin-bottom: 16px;
    line-height: 1.5;
  }

  ${Btn} {
    width: 218px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    padding: 20px;

    img {
      width: 100%;
      height: auto;
      margin-right: 0;
      margin-bottom: 16px;
    }

    ${Btn} {
      width: 100%;
    }
  }
`
