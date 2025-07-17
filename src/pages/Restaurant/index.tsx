import HeaderRestaurant from '../../components/HeaderRestaurant'
import ListFoods from '../../components/ListFoods'
import { useParams } from 'react-router-dom'
import Cart from '../../components/Cart'
import { useGetFeaturedMenuQuery } from '../../services/api'

const RestaurantPage = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetFeaturedMenuQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderRestaurant
        image={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      <ListFoods foods={restaurante?.cardapio} />
      <Cart />
    </>
  )
}

export default RestaurantPage
