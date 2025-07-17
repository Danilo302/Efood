import { Btn } from '../Food/styles'
import { CartContainer, Overlay, Sidebar } from './styles'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <li></li>
        </ul>
        <div>
          <p>Valor total</p>
          <span>R$ 182,70</span>
        </div>
        <Btn>Continuar com a entrega</Btn>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
