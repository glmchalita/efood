import styled from 'styled-components'

export const FoodContainer = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.color.red};
`

export const FoodContent = styled.div`
  img {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    height: 200px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    color: ${({ theme }) => theme.color.bege};

    h3 {
      font-weight: 700;
    }

    p {
      font-size: 14px;
    }

    button {
      background-color: ${({ theme }) => theme.color.bege};
      color: ${({ theme }) => theme.color.red};
      font-size: 14px;
      font-weight: 700;
      padding: 4px;
      cursor: pointer;
    }
  }
`
