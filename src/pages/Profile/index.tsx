import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { FoodCard } from './FoodCard'
import {
  HeaderContainer,
  HeaderContent,
  RestaurantContainer,
  RestaurantContent,
  RestaurantHeader,
} from './styles'

export function Profile() {
  return (
    <>
      <HeaderContainer>
        <Link to="/">Restaurantes</Link>

        <img src={logo} alt="" />

        <a href="#">0 produto(s) no carrinho</a>
      </HeaderContainer>

      <RestaurantContainer>
        <RestaurantHeader>
          <span>Japonesa</span>
          <h2>Hioki Sushi</h2>
        </RestaurantHeader>

        <RestaurantContent>
          {Array.from({ length: 6 }).map((_, index) => {
            return <FoodCard key={index} />
          })}
        </RestaurantContent>
      </RestaurantContainer>
    </>
  )
}
