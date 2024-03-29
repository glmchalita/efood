import * as Dialog from '@radix-ui/react-dialog'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { Button } from '../../components/Button'
import { RestaurantInput, setOpen } from '../../store/sliceCart'
import { useCart } from '../../store/useCart'
import { Checkout } from './Checkout'
import { FoodCard } from './components/FoodCard'
import {
  HeaderContainer,
  HeaderContent,
  MenuContainer,
  RestaurantContainer,
  RestaurantContent,
  RestaurantHeader,
  RestaurantHeaderContent,
} from './styles'

export function Profile() {
  const { state } = useLocation()
  const restaurant = state.restaurant as RestaurantInput

  const dispatch = useDispatch()
  const { cart, isOpen } = useCart()

  function handleOpenModal(isOpen: boolean) {
    dispatch(setOpen(isOpen))
  }

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Link to="/">Restaurantes</Link>

          <img src={logo} alt="" />

          <Dialog.Root open={isOpen} onOpenChange={handleOpenModal}>
            <Dialog.Trigger asChild>
              <Button>{cart.length} produto(s) no carrinho</Button>
            </Dialog.Trigger>

            <Checkout />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>

      <RestaurantContainer>
        <RestaurantHeader $imageUrl={restaurant.capa}>
          <RestaurantHeaderContent>
            <span>{restaurant.tipo}</span>
            <h2>{restaurant.titulo}</h2>
          </RestaurantHeaderContent>
        </RestaurantHeader>

        <MenuContainer>
          <RestaurantContent>
            {restaurant.cardapio.map((item) => {
              return <FoodCard key={item.id} item={item} />
            })}
          </RestaurantContent>
        </MenuContainer>
      </RestaurantContainer>
    </>
  )
}
