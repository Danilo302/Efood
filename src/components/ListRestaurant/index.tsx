import { Restaurant } from '../../pages/Home'
import RestaurantContent from '../Restaurant'
import { List, SectionContainer } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const ListRestaurant = ({ restaurants }: Props) => {
  return (
    <SectionContainer>
      <List className="container">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <RestaurantContent
              id={restaurant.id}
              title={restaurant.titulo}
              description={restaurant.descricao}
              image={restaurant.capa}
              score={restaurant.avaliacao}
              tags={
                restaurant.destacado
                  ? ['destaque da semana', restaurant.tipo]
                  : [restaurant.tipo]
              }
            />
          </li>
        ))}
      </List>
    </SectionContainer>
  )
}

export default ListRestaurant
