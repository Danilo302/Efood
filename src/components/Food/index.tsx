import { Btn, Descripton, FoodItem } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Food = ({ title, description, image }: Props) => (
  <FoodItem>
    <img src={image} />
    <Descripton>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <Btn>Adicionar ao carrinho</Btn>
    </Descripton>
  </FoodItem>
)

export default Food
