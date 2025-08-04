import styled from 'styled-components'
import { cores } from '../../styles'

export const FormContainer = styled.div`
  padding-top: 16px;

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
  }

  label {
    margin: 8px 0;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input {
    background-color: ${cores.branco};
    border: none;
    width: 100%;
    height: 32px;
  }

  > div {
    display: flex;
    column-gap: 34px;

    div {
      width: 100%;
    }
  }

  & .small-container {
    max-width: 87px;
  }
`
export const Btns = styled.div`
  flex-direction: column;
  gap: 8px;
  padding-top: 24px;
`
