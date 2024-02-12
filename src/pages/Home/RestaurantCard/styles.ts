import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const RestaurantCardContainer = styled.div`
  max-width: 400px;
  width: 100%;

  color: ${({ theme }) => theme.color.red};
  position: relative;
  > img {
    display: block;
    width: 100%;
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

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 18px;
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
  }
`

export const NavLink = styled(Link)`
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.bege};
  padding: 4px 6px;

  width: fit-content;
`
