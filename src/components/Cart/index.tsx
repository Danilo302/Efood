import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, OpenCheckout, remove } from '../../store/reducers/cart'

import deleteCart from '../../assets/images/delete.png'
import { formataPreco, getTotalPrice } from '../../utils'

import { Btn } from '../Food/styles'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const openCheckout = () => {
    dispatch(OpenCheckout())
    dispatch(close())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.ItemCart key={item.id}>
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
                </S.ItemCart>
              ))}
            </ul>
            <S.Price>
              <p>Valor total</p>
              <span>{formataPreco(getTotalPrice(items))}</span>
            </S.Price>
            <Btn onClick={openCheckout}>Continuar com a entrega</Btn>
          </>
        ) : (
          <p>
            O carrinho está vazio, adicione pelo menos um item para continuar a
            compra
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
