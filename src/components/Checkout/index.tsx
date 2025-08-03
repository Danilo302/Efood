import { useDispatch, useSelector } from 'react-redux'
import { CartContainer, Overlay, Sidebar } from '../Cart/styles'
import { Btns, FormContainer } from './styles'
import { RootReducer } from '../../store'
import { Btn } from '../Food/styles'
import { OpenCheckout, open } from '../../store/reducers/cart'
import { formataPreco, getTotalPrice } from '../../utils'

const Checkout = () => {
  const { isOpenCheckout, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const returnToCart = () => {
    dispatch(open())
    dispatch(OpenCheckout())
  }

  return (
    <CartContainer className={isOpenCheckout ? 'is-open' : ''}>
      <Overlay />
      <Sidebar>
        <FormContainer>
          <h3>Entrega</h3>

          <label htmlFor="">Quem irá receber</label>
          <input type="text" />

          <label htmlFor="">Endereço</label>
          <input type="text" />

          <label htmlFor="">Cidade</label>
          <input type="text" name="" id="" />

          <div>
            <div>
              <label htmlFor="">CEP</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">Número</label>
              <input type="text" name="" id="" />
            </div>
          </div>

          <label htmlFor="">Complemento (opcional)</label>
          <input type="text" />

          <Btns>
            <Btn>Continuar com o pagamento</Btn>
            <Btn type="button" onClick={returnToCart}>
              Voltar para o carrinho
            </Btn>
          </Btns>
        </FormContainer>
        <FormContainer>
          <h3>
            Pagamento - Valor a pagar {formataPreco(getTotalPrice(items))}
          </h3>

          <label htmlFor="">Nome no cartão</label>
          <input type="text" />

          <div>
            <div>
              <label htmlFor="">Número do cartão</label>
              <input type="text" />
            </div>

            <div className="small-container">
              <label htmlFor="">CVV</label>
              <input type="text" />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="">Mês de vencimento</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">Ano de vencimento</label>
              <input type="text" />
            </div>
          </div>

          <Btns>
            <Btn>Finalizar pagamento</Btn>
            <Btn type="button" onClick={returnToCart}>
              Voltar para a edição de endereço
            </Btn>
          </Btns>
        </FormContainer>
      </Sidebar>
    </CartContainer>
  )
}

export default Checkout
