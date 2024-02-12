import logo from '../../assets/logo.svg'
import { RestaurantCard } from './RestaurantCard'
import { HeaderContainer, HeaderContent, MainContainer } from './styles'

export function Home() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <img src={logo} alt="" />

          <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
        </HeaderContent>
      </HeaderContainer>

      <MainContainer>
        {Array.from({ length: 6 }).map((_, index) => {
          return <RestaurantCard key={index} />
        })}
      </MainContainer>
    </>
  )
}
