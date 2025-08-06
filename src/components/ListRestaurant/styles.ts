import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const SectionContainer = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    column-gap: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
`
