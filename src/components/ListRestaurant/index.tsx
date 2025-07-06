import RestaurantClass from '../../models/Restaurant'
import Restaurant from '../Restaurant'
import { List } from './styles'

type Props = {
  restaurants: RestaurantClass[]
}

const ListRestaurant = ({ restaurants }: Props) => {
  return (
    <section>
      <List className="container">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Restaurant
              title={restaurant.title}
              description={restaurant.description}
              image={restaurant.image}
              score={restaurant.score}
              tags={restaurant.tag}
            />
          </li>
        ))}
      </List>
    </section>
  )
}

export default ListRestaurant
