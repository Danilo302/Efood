import { useState } from 'react'
import {
  Btn,
  Descripton,
  FoodItem,
  Modal,
  ModalContent,
  ModelInfo
} from './styles'
import close from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'
import { open, add } from '../../store/reducers/cart'
import { Cardapio } from '../../pages/Home'

type Props = {
  item: Cardapio
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Food = ({ item }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(add(item))
    dispatch(open())
    setIsVisible(false)
  }

  return (
    <>
      <FoodItem>
        <img src={item.foto} />
        <Descripton>
          <div>
            <h4>{item.nome}</h4>
            <p>{item.descricao}</p>
          </div>
          <Btn onClick={() => setIsVisible(true)}>Adicionar ao carrinho</Btn>
        </Descripton>
      </FoodItem>

      <Modal className={isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <img
              src={close}
              onClick={() => setIsVisible(false)}
              alt="Clique para fechar"
            />
          </header>
          <ModelInfo>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h4>{item.nome}</h4>
              <p>{item.descricao}</p> <br />
              <p>Serve: {item.porcao}</p>
              <Btn onClick={addCart}>
                Adicionar ao carrinho - {formataPreco(item.preco)}
              </Btn>
            </div>
          </ModelInfo>
        </ModalContent>
        <div className="overlay" onClick={() => setIsVisible(false)}></div>
      </Modal>
    </>
  )
}

export default Food
