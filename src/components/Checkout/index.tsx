import { CartContainer, Overlay, Sidebar } from '../Cart/styles'

const Checkout = () => {
  return (
    <CartContainer className={'is-open'}>
      <Overlay />
      <Sidebar>
        <h3>Entrega</h3>
        <form>
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
              <input type="number" name="" id="" />
            </div>
          </div>

          <label htmlFor="">Complemento (opcional)</label>
          <input type="text" />
        </form>
      </Sidebar>
    </CartContainer>
  )
}

export default Checkout
