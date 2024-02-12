import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 40px 0;

  background-color: ${({ theme }) => theme.color.bege};

  div {
    line-height: 0;
    display: flex;
    gap: 8px;

    svg {
      background-color: ${({ theme }) => theme.color.red};
      border-radius: 50%;
      padding: 4px;
      line-height: 0;
      color: ${({ theme }) => theme.color.white};
    }
  }

  p {
    font-size: 10px;
    color: ${({ theme }) => theme.color.red};
  }
`
