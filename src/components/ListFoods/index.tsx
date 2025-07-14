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
    <section>
      <List className="container">
        {foods.map((food) => (
          <Food
            title={food.nome}
            description={food.descricao}
            image={food.foto}
            key={food.id}
          />
        ))}
      </List>
    </section>
  )
}

export default ListFoods
