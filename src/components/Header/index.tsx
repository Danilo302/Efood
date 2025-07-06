import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { HeaderContainer, Title } from './styles'

const Header = () => (
  <HeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <img src={logo} alt="logo" />
    </div>
    <Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Title>
  </HeaderContainer>
)

export default Header
