import styled from 'styled-components'

export const ItemContent = styled.div`
  display: flex;
  gap: 8px;
  background-color: ${({ theme }) => theme.color.bege};
  color: ${({ theme }) => theme.color.red};
  padding: 8px 8px 12px;
  border-radius: 6px;
  position: relative;

  img {
    display: block;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h3 {
      font-size: 18px;
      font-weight: 900;
    }

    span {
      font-size: 14px;
    }
  }

  button {
    line-height: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.color.red};
    position: absolute;

    bottom: 0.5rem;
    right: 0.5rem;

    cursor: pointer;
  }
`
