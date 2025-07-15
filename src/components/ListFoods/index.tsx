import Food from '../Food'
import { List } from './styles'

type Props = {
  foods: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const ListFoods = ({ foods }: Props) => {
  return (
    <>
      <section>
        <List className="container">
          {foods.map((food) => (
            <Food key={food.id} item={food} />
          ))}
        </List>
      </section>
    </>
  )
}

export default ListFoods
