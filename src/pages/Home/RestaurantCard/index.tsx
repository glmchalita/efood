import { Star } from 'lucide-react'
import { useTheme } from 'styled-components'

import restaurantImg1 from '../../../assets/restaurant-1.png'
import { CardContent, NavLink, RestaurantCardContainer } from './styles'

export function RestaurantCard() {
  const theme = useTheme()
  console.log(restaurantImg1)

  return (
    <RestaurantCardContainer>
      <img src={restaurantImg1} alt="" />

      <div>
        <span>Japonesa</span>
      </div>

      <CardContent>
        <div>
          <h3>Hioki Sushi</h3>
          <span>
            4.9
            <Star fill={theme.color.yellow} color={theme.color.yellow} />
          </span>
        </div>

        <p>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida. Experimente o
          Japão sem sair do lar com nosso delivery!
        </p>

        <NavLink to="/profile">Saiba mais</NavLink>
      </CardContent>
    </RestaurantCardContainer>
  )
}
