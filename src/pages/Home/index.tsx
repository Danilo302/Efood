import Header from '../../components/Header'
import ListRestaurant from '../../components/ListRestaurant'

import { useGetFeaturedRestaurantQuery } from '../../services/api'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
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
