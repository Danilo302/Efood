import { ClipLoader } from 'react-spinners'

import { cores } from '../../styles'
import { LoaderContainer } from './styles'

const Loader = () => (
  <LoaderContainer>
    <ClipLoader color={cores.red} size={50} />
  </LoaderContainer>
)

export default Loader
