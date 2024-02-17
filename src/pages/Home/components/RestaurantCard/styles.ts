import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const RestaurantCardContainer = styled.div`
  width: 100%;

  color: ${({ theme }) => theme.color.red};
  position: relative;

  > img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  > div:first-of-type {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.bege};

    span {
      padding: 6px 4px;
      background-color: ${({ theme }) => theme.color.red};

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
`

export const CardContent = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  background-color: ${({ theme }) => theme.color.white};
  border: 2px solid ${({ theme }) => theme.color.red};
  border-top: 0;

  > div {
    p {
      font-size: 14px;
    }
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 18px;
  }

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: 700;
  }
`
export const NavLink = styled(Link)`
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.bege};
  padding: 4px 6px;

  width: fit-content;

  font-size: 14px;
  font-weight: bold;

  margin-top: auto;
`
