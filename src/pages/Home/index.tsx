import logo from '../../assets/logo.svg'
import { useGetRestaurantsQuery } from '../../services/api'
import { RestaurantCard } from './components/RestaurantCard'
import {
  HeaderContainer,
  HeaderContent,
  MainContainer,
  MainContent,
} from './styles'

export function Home() {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <>
          <HeaderContainer>
            <HeaderContent>
              <img src={logo} alt="" />

              <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
            </HeaderContent>
          </HeaderContainer>

          <MainContainer>
            <MainContent>
              {restaurants &&
                restaurants.map((restaurant) => {
                  return (
                    <RestaurantCard
                      key={restaurant.id}
                      restaurant={restaurant}
                    />
                  )
                })}
            </MainContent>
          </MainContainer>
        </>
      )}
    </>
  )
}
