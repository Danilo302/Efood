import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { open, add } from '../../store/reducers/cart'

import close from '../../assets/images/close.png'

import { formataPreco } from '../../utils'

import * as S from './styles'

type Props = {
  item: Cardapio
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
      <S.FoodItem>
        <img src={item.foto} />
        <S.Descripton>
          <div>
            <h4>{item.nome}</h4>
            <p>{item.descricao}</p>
          </div>
          <S.Btn onClick={() => setIsVisible(true)}>
            Adicionar ao carrinho
          </S.Btn>
        </S.Descripton>
      </S.FoodItem>

      <S.Modal className={isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <header>
            <img
              src={close}
              onClick={() => setIsVisible(false)}
              alt="Clique para fechar"
            />
          </header>
          <S.ModelInfo>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h4>{item.nome}</h4>
              <p>{item.descricao}</p> <br />
              <p>Serve: {item.porcao}</p>
              <S.Btn onClick={addCart}>
                Adicionar ao carrinho - {formataPreco(item.preco)}
              </S.Btn>
            </div>
          </S.ModelInfo>
        </S.ModalContent>
        <div className="overlay" onClick={() => setIsVisible(false)}></div>
      </S.Modal>
    </>
  )
}

export default Food
