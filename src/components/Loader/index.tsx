import { ClipLoader } from 'react-spinners'

import { colors } from '../../styles'
import { LoaderContainer } from './styles'

const Loader = () => (
  <LoaderContainer>
    <ClipLoader color={colors.red} size={50} />
  </LoaderContainer>
)

export default Loader
