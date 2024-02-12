import styled from 'styled-components'

import restaurantImg from '../../assets/restaurant-1.png'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 30px 170px;

  a {
    color: ${({ theme }) => theme.color.red};
    font-weight: 700;
  }
`

export const RestaurantContainer = styled.div``

export const RestaurantHeader = styled.div`
  background-image: url(${restaurantImg});
  background-repeat: no-repeat;
  background-size: 100%;

  display: flex;
  flex-direction: column;
  gap: 160px;

  padding: 32px 170px;

  color: ${({ theme }) => theme.color.white};

  font-size: 32px;

  span {
    font-weight: 200;
  }

  h2 {
    font-weight: 700;
  }
`

export const RestaurantContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  padding: 56px 170px 120px;
`
