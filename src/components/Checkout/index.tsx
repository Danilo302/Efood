import { useDispatch, useSelector } from 'react-redux'
import { CartContainer, Overlay, Sidebar } from '../Cart/styles'
import { Btns, FormContainer } from './styles'
import { RootReducer } from '../../store'
import { Btn } from '../Food/styles'
import { OpenCheckout, open } from '../../store/reducers/cart'
import { formataPreco, getTotalPrice } from '../../utils'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Checkout = () => {
  const { isOpenCheckout, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const returnToCart = () => {
    dispatch(open())
    dispatch(OpenCheckout())
  }

  const [isPayment, setIsPayment] = useState(false)

  const form = useFormik({
    initialValues: {
      recipientName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      nameCard: '',
      numberCard: '',
      cvv: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      recipientName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string().required('O campo é obrigatório'),
      nameCard: Yup.string().required('O campo é obrigatório'),
      numberCard: Yup.string().required('O campo é obrigatório'),
      cvv: Yup.string().required('O campo é obrigatório'),
      month: Yup.string().required('O campo é obrigatório'),
      year: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isChanged && isInvalid) return message
    return ''
  }

  return (
    <CartContainer className={isOpenCheckout ? 'is-open' : ''}>
      <Overlay />
      <Sidebar>
        <form onSubmit={form.handleSubmit}>
          {isPayment ? (
            <FormContainer>
              <h3>
                Pagamento - Valor a pagar {formataPreco(getTotalPrice(items))}
              </h3>

              <label htmlFor="nameCard">Nome no cartão</label>
              <input
                type="text"
                id="nameCard"
                name="nameCard"
                value={form.values.nameCard}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />

              <div>
                <div>
                  <label htmlFor="numberCard">Número do cartão</label>
                  <input
                    type="text"
                    id="numberCard"
                    name="numberCard"
                    value={form.values.numberCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>

                <div className="small-container">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="month">Mês de vencimento</label>
                  <input
                    type="text"
                    id="month"
                    name="month"
                    value={form.values.month}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>

                <div>
                  <label htmlFor="year">Ano de vencimento</label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    value={form.values.year}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>
              </div>

              <Btns>
                <Btn>Finalizar pagamento</Btn>
                <Btn type="button" onClick={() => setIsPayment(false)}>
                  Voltar para a edição de endereço
                </Btn>
              </Btns>
            </FormContainer>
          ) : (
            <FormContainer>
              <h3>Entrega</h3>

              <label htmlFor="recipientName">Quem irá receber</label>
              <input
                type="text"
                id="recipientName"
                name="recipientName"
                value={form.values.recipientName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />

              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />

              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                name="city"
                id="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />

              <div>
                <div>
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>

                <div>
                  <label htmlFor="number">Número</label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>
              </div>

              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />

              <Btns>
                <Btn onClick={() => setIsPayment(true)}>
                  Continuar com o pagamento
                </Btn>
                <Btn type="button" onClick={returnToCart}>
                  Voltar para o carrinho
                </Btn>
              </Btns>
            </FormContainer>
          )}
        </form>
      </Sidebar>
    </CartContainer>
  )
}

export default Checkout
