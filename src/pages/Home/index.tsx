import Header from '../../components/Header'
import ListRestaurant from '../../components/ListRestaurant'

import { useGetFeaturedRestaurantQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
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

const Home = () => {
  const { data } = useGetFeaturedRestaurantQuery()

  if (data) {
    return (
      <>
        <Header />
        <ListRestaurant restaurants={data} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
