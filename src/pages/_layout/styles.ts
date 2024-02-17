import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 40px 0;

  background-color: ${({ theme }) => theme.color.bege};

  > div {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;

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
  }

  p {
    width: 480px;
    text-align: center;
    font-size: 10px;
    color: ${({ theme }) => theme.color.red};
  }
`
