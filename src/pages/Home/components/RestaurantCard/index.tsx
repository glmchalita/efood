import { Star } from 'lucide-react'
import { useTheme } from 'styled-components'

import { RestaurantInput } from '../../../../store/sliceCart'
import { CardContent, NavLink, RestaurantCardContainer, Title } from './styles'

interface RestaurantCardProps {
  restaurant: RestaurantInput
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const theme = useTheme()

  const restaurantQuery = restaurant.titulo.split(' ').join('-').toLowerCase()

  return (
    <RestaurantCardContainer>
      <img src={restaurant.capa} alt="" />

      <div>
        {restaurant.destacado ? <span>Destacado</span> : null}
        <span>{restaurant.tipo}</span>
      </div>

      <CardContent>
        <div>
          <Title>
            <h3>{restaurant.titulo}</h3>
            <span>
              {restaurant.avaliacao}
              <Star fill={theme.color.yellow} color={theme.color.yellow} />
            </span>
          </Title>

          <p>{restaurant.descricao}</p>
        </div>

        <NavLink to={`/restaurant/${restaurantQuery}`} state={{ restaurant }}>
          Saiba mais
        </NavLink>
      </CardContent>
    </RestaurantCardContainer>
  )
}
