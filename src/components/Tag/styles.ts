import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.red};
  color: ${cores.branco};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: ${(props) => (props.size === 'big' ? 'bold' : '400')};
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 4px')};
`
