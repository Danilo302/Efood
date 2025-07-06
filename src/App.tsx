import React from 'react'
import { GlobalCss } from './styles'
import Header from './components/Header'
import ListRestaurant from './components/ListRestaurant'
import Restaurant from './models/Restaurant'

import imageRest from './assets/images/imagem1.png'

const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi ',
    score: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: imageRest,
    tag: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    title: 'Hioki Sushi ',
    score: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: imageRest,
    tag: ['Destaque da semana', 'Japonesa']
  }
]

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <ListRestaurant restaurants={restaurants} />
    </>
  )
}

export default App
