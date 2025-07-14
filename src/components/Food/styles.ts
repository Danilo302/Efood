import styled from 'styled-components'
import { cores } from '../../styles'

export const FoodItem = styled.li`
  background-color: ${cores.red};
  max-width: 320px;
  color: ${cores.branco};
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
  background-color: ${cores.branco};
  color: ${cores.red};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
`
