import styled from 'styled-components'
import { cores } from '../../styles'

export const FoodItem = styled.li`
  background-color: ${cores.red};
  max-width: 320px;
  color: ${cores.branco};

  img {
    margin: 8px;
  }
`
export const Descripton = styled.div`
  padding: 0 8px;

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
