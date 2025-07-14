import Header from '../../components/Header'
import ListRestaurant from '../../components/ListRestaurant'
import { useEffect, useState } from 'react'
//import Restaurant from '../../models/Restaurant'

// const restaurants: Restaurant[] = [
//   {
//     id: 1,
//     title: 'Hioki Sushi ',
//     score: '4.9',
//     description:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
//     image: imageRest1,
//     tag: ['Destaque da semana', 'Japonesa']
//   },
//   {
//     id: 2,
//     title: 'La Dolce Vita Trattoria',
//     score: '4.6',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: imageRest2,
//     tag: ['Italiana']
//   },
//   {
//     id: 2,
//     title: 'La Dolce Vita Trattoria',
//     score: '4.6',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: imageRest2,
//     tag: ['Italiana']
//   },
//   {
//     id: 2,
//     title: 'La Dolce Vita Trattoria',
//     score: '4.6',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: imageRest2,
//     tag: ['Italiana']
//   },
//   {
//     id: 2,
//     title: 'La Dolce Vita Trattoria',
//     score: '4.6',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: imageRest2,
//     tag: ['Italiana']
//   },
//   {
//     id: 2,
//     title: 'La Dolce Vita Trattoria',
//     score: '4.6',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: imageRest2,
//     tag: ['Italiana']
//   }
// ]

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
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header />
      <ListRestaurant restaurants={restaurants} />
    </>
  )
}

export default Home
