import { useDispatch, useSelector } from 'react-redux'
import { Btn } from '../Food/styles'
import { CartContainer, ItemCart, Overlay, Price, Sidebar } from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Food'
import deleteCart from '../../assets/images/delete.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <ItemCart key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h4>{item.nome}</h4>
                    <p>{formataPreco(item.preco)}</p>
                    <div>
                      <img
                        onClick={() => removeItem(item.id)}
                        src={deleteCart}
                        alt={`Clique para excluir ${item.nome}do carrinho.`}
                      />
                    </div>
                  </div>
                </ItemCart>
              ))}
            </ul>
            <Price>
              <p>Valor total</p>
              <span>{formataPreco(getTotalPrice())}</span>
            </Price>
            <Btn>Continuar com a entrega</Btn>
          </>
        ) : (
          <p>
            O carrinho está vazio, adicione pelo menos um item para continuar a
            compra
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
