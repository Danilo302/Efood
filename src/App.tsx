import React from 'react'
import { GlobalCss } from './styles'
import Header from './components/Header'
import ListRestaurant from './components/ListRestaurant'
import Restaurant from './models/Restaurant'

import imageRest1 from './assets/images/imagem1.png'
import imageRest2 from './assets/images/image2.png'
import Footer from './components/Footer'

const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi ',
    score: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: imageRest1,
    tag: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imageRest2,
    tag: ['Italiana']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imageRest2,
    tag: ['Italiana']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imageRest2,
    tag: ['Italiana']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imageRest2,
    tag: ['Italiana']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imageRest2,
    tag: ['Italiana']
  }
]

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <ListRestaurant restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default App
