import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  padding: 40px 0px 65px;

  a {
    color: ${({ theme }) => theme.color.red};
    font-size: 18px;
    font-weight: 700;
  }

  button {
    font-size: 18px;
    font-weight: 700;
    background-color: transparent;
  }
`

export const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin-right: auto;
  }

  button {
    margin-left: auto;
  }
`

export const RestaurantContainer = styled.div``

interface RestaurantHeaderProps {
  $imageUrl: string
}

export const RestaurantHeader = styled.div<RestaurantHeaderProps>`
  background-image: url(${(props) => props.$imageUrl});
  background-repeat: no-repeat;
  background-size: 100%;
`

export const RestaurantHeaderContent = styled.div`
  color: ${({ theme }) => theme.color.white};
  padding: 25px 0px 32px;
  display: flex;
  flex-direction: column;
  gap: 156px;
  max-width: 1024px;

  margin: 0 auto;
  width: 100%;
  span {
    font-weight: 200;
    font-size: 32px;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 32px;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
`

export const RestaurantContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  padding: 56px 0px 120px;
`
