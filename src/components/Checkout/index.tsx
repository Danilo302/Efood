import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import { OpenCheckout, clear, open } from '../../store/reducers/cart'

import { formataPreco, getTotalPrice } from '../../utils'
import { usePurchaseMutation } from '../../services/api'

import { CartContainer, Overlay, Sidebar } from '../Cart/styles'
import { Btns, FormContainer } from './styles'
import { Btn } from '../Food/styles'

const Checkout = () => {
  const { isOpenCheckout, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
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
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'O campo precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string().optional(),
      nameCard: Yup.string().required('O campo é obrigatório'),
      numberCard: Yup.string()
        .min(16, 'O campo precisa ter pelo menos 13 caracteres')
        .max(19, 'O campo só pode ter no máximo 16 caracteres')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'O campo precisa ter 3 caracteres')
        .max(3, 'O campo precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      month: Yup.string().required('O campo é obrigatório'),
      year: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.recipientName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.nameCard,
            number: values.numberCard,
            cvv: Number(values.cvv),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        }
      })
    }
  })

  const checkHasError = (fieldName: string) => {
    const isChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isChanged && isInvalid

    return hasError
  }

  const toPayment = () => {
    if (
      form.errors.recipientName ||
      form.errors.address ||
      form.errors.city ||
      form.errors.cep ||
      form.errors.number ||
      Object.keys(form.touched).length === 0
    ) {
      alert(
        'Preencha todos os campos obrigatórios corretamente antes de prosseguir com o pagamento.'
      )
    } else {
      setIsPayment(true)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [dispatch, isSuccess])

  const [reqSuccess, setReqSuccess] = useState(false)

  const requestComplete = () => {
    dispatch(OpenCheckout())
    setIsPayment(false)
    form.resetForm()
    setReqSuccess(false)
  }

  return (
    <CartContainer className={isOpenCheckout ? 'is-open' : ''}>
      <Overlay
        onClick={() => {
          dispatch(OpenCheckout())
          setIsPayment(false)
          if (isSuccess) setReqSuccess(false)
        }}
      />
      <Sidebar>
        {reqSuccess && data && isPayment ? (
          <FormContainer>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição. <br /> <br /> Esperamos que desfrute de uma deliciosa e
              agradável experiência gastronômica. Bom apetite!
            </p>

            <Btn type="button" onClick={requestComplete}>
              Concluir
            </Btn>
          </FormContainer>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              await form.handleSubmit()
              setReqSuccess(true)
            }}
          >
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
                  className={checkHasError('nameCard') ? 'error' : ''}
                />

                <div>
                  <div>
                    <label htmlFor="numberCard">Número do cartão</label>
                    <InputMask
                      mask="9999 9999 9999 9999"
                      type="text"
                      id="numberCard"
                      name="numberCard"
                      value={form.values.numberCard}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkHasError('numberCard') ? 'error' : ''}
                    />
                  </div>

                  <div className="small-container">
                    <label htmlFor="cvv">CVV</label>
                    <InputMask
                      mask={'999'}
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={form.values.cvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkHasError('cvv') ? 'error' : ''}
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="month">Mês de vencimento</label>
                    <InputMask
                      mask={'99'}
                      type="text"
                      id="month"
                      name="month"
                      value={form.values.month}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkHasError('month') ? 'error' : ''}
                    />
                  </div>

                  <div>
                    <label htmlFor="year">Ano de vencimento</label>
                    <InputMask
                      mask={'99'}
                      type="text"
                      id="year"
                      name="year"
                      value={form.values.year}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkHasError('year') ? 'error' : ''}
                    />
                  </div>
                </div>

                <Btns>
                  <Btn type="submit" disabled={isLoading}>
                    Finalizar pagamento
                  </Btn>
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
                  className={checkHasError('recipientName') ? 'error' : ''}
                />

                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkHasError('address') ? 'error' : ''}
                />

                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkHasError('city') ? 'error' : ''}
                />

                <div>
                  <div>
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                      mask={'99999-999'}
                      type="text"
                      id="cep"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkHasError('cep') ? 'error' : ''}
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
                      className={checkHasError('number') ? 'error' : ''}
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
                  className={checkHasError('complement') ? 'error' : ''}
                />

                <Btns>
                  <Btn type="button" onClick={toPayment}>
                    Continuar com o pagamento
                  </Btn>
                  <Btn type="button" onClick={returnToCart}>
                    Voltar para o carrinho
                  </Btn>
                </Btns>
              </FormContainer>
            )}
          </form>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Checkout
