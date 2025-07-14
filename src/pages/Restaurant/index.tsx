import HeaderRestaurant from '../../components/HeaderRestaurant'
import ListFoods from '../../components/ListFoods'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurant } from '../Home'

const RestaurantPage = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

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
    </>
  )
}

export default RestaurantPage
