import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { RestaurantInput } from '../Home'
import { FoodCard } from './FoodCard'
import {
  HeaderContainer,
  RestaurantContainer,
  RestaurantContent,
  RestaurantHeader,
} from './styles'

export function Profile() {
  const { state } = useLocation()
  const restaurant = state.restaurant as RestaurantInput

  return (
    <>
      <HeaderContainer>
        <Link to="/">Restaurantes</Link>

        <img src={logo} alt="" />

        <a href="#">0 produto(s) no carrinho</a>
      </HeaderContainer>

      <RestaurantContainer>
        <RestaurantHeader $imageUrl={restaurant.capa}>
          <span>{restaurant.tipo}</span>
          <h2>{restaurant.titulo}</h2>
        </RestaurantHeader>

        <RestaurantContent>
          {restaurant.cardapio.map((item) => {
            return <FoodCard key={item.id} item={item} />
          })}
        </RestaurantContent>
      </RestaurantContainer>
    </>
  )
}
