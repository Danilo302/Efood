import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo2.png'
import image from '../../assets/images/image2.png'
import { HeaderContainer, ImgContainer } from './styles'

const HeaderRestaurant = () => (
  <header>
    <div style={{ backgroundImage: `url(${fundo})` }}>
      <HeaderContainer className="container">
        <Link to="/">
          <h3>Restaurantes</h3>
        </Link>
        <img src={logo} />
        <span>0 produto(s) no carrinho</span>
      </HeaderContainer>
    </div>
    <ImgContainer
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${image})`
      }}
    >
      <div className="container">
        <h2>Italiana</h2>
        <h1>La Dolce Vita Trattoria</h1>
      </div>
    </ImgContainer>
  </header>
)

export default HeaderRestaurant
