import { useDispatch, useSelector } from 'react-redux'
import { Btn } from '../Food/styles'
import { CartContainer, Overlay, Sidebar } from './styles'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
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
