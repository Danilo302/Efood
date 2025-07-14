import HeaderRestaurant from '../../components/HeaderRestaurant'
import ListFoods from '../../components/ListFoods'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurant } from '../Home'

// const foods: Food[] = [
//   {
//     id: 1,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     image: pizza
//   },
//   {
//     id: 2,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     image: pizza
//   },
//   {
//     id: 3,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     image: pizza
//   },
//   {
//     id: 4,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     image: pizza
//   },
//   {
//     id: 5,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     image: pizza
//   },
//   {
//     id: 6,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     image: pizza
//   }
// ]

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
      <HeaderRestaurant />
      <ListFoods foods={restaurante?.cardapio} />
    </>
  )
}

export default RestaurantPage
