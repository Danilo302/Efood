import { useParams } from 'react-router-dom'

import { useGetFeaturedMenuQuery } from '../../services/api'

import HeaderRestaurant from '../../components/HeaderRestaurant'
import ListFoods from '../../components/ListFoods'
import Cart from '../../components/Cart'
import Checkout from '../../components/Checkout'
import Loader from '../../components/Loader'

type RestaurantParams = {
  id: string
}

const RestaurantPage = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurante } = useGetFeaturedMenuQuery(id)

  if (!restaurante) {
    return <Loader />
  }

  return (
    <>
      <HeaderRestaurant
        image={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      <ListFoods cardapio={restaurante.cardapio} />
      <Cart />
      <Checkout />
    </>
  )
}

export default RestaurantPage
