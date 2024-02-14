import { useEffect, useState } from 'react'

import logo from '../../assets/logo.svg'
import { RestaurantCard } from './RestaurantCard'
import {
  HeaderContainer,
  HeaderContent,
  MainContainer,
  MainContent,
} from './styles'

export interface ItemInput {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface RestaurantInput {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ItemInput[]
}

export function Home() {
  const [restaurants, setRestaurants] = useState<RestaurantInput[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setRestaurants(res)),
    )
  }, [])

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <img src={logo} alt="" />

          <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
        </HeaderContent>
      </HeaderContainer>

      <MainContainer>
        <MainContent>
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            )
          })}
        </MainContent>
      </MainContainer>
    </>
  )
}
