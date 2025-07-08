import FoodClass from '../../models/Food'
import Food from '../Food'
import { List } from './styles'

type Props = { foods: FoodClass[] }

const ListFoods = ({ foods }: Props) => {
  return (
    <section>
      <List className="container">
        {foods.map((food) => (
          <Food
            title={food.title}
            description={food.description}
            image={food.image}
            key={food.id}
          />
        ))}
      </List>
    </section>
  )
}

export default ListFoods
