import { Star } from 'lucide-react'
import { useTheme } from 'styled-components'

import { RestaurantInput } from '../..'
import { CardContent, NavLink, RestaurantCardContainer } from './styles'

export function RestaurantCard({
  restaurant,
}: {
  restaurant: RestaurantInput
}) {
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
          <h3>{restaurant.titulo}</h3>
          <span>
            {restaurant.avaliacao}
            <Star fill={theme.color.yellow} color={theme.color.yellow} />
          </span>
        </div>

        <p>{restaurant.descricao}</p>

        <NavLink to={`/restaurant/${restaurantQuery}`} state={{ restaurant }}>
          Saiba mais
        </NavLink>
      </CardContent>
    </RestaurantCardContainer>
  )
}
