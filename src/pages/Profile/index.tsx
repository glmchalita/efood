import * as Dialog from '@radix-ui/react-dialog'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { Button } from '../../components/Button'
import { useCart } from '../../store/useCart'
import { RestaurantInput } from '../Home'
import { Checkout } from './Checkout'
import { FoodCard } from './components/FoodCard'
import {
  HeaderContainer,
  RestaurantContainer,
  RestaurantContent,
  RestaurantHeader,
} from './styles'

export function Profile() {
  const { state } = useLocation()
  const restaurant = state.restaurant as RestaurantInput
  const cart = useCart()

  return (
    <>
      <HeaderContainer>
        <Link to="/">Restaurantes</Link>

        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>{cart.length} produto(s) no carrinho</Button>
          </Dialog.Trigger>

          <Checkout />
        </Dialog.Root>
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
