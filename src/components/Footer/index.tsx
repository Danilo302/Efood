import { FooterContainer, Icons } from './styles'
import logo from '../../assets/images/logo.png'
import intagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <FooterContainer>
    <img src={logo} />
    <Icons>
      <a href="#">
        <img src={intagram} />
      </a>
      <a href="#">
        <img src={facebook} />
      </a>
      <a href="#">
        <img src={twitter} />
      </a>
    </Icons>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </p>
  </FooterContainer>
)

export default Footer
