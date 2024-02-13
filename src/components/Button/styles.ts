import styled from 'styled-components'

export const ButtonStyled = styled.button`
  color: ${({ theme }) => theme.color.red};
  background-color: ${({ theme }) => theme.color.bege};

  font-size: 14px;
  font-weight: 700;

  padding: 4px 6px;
  cursor: pointer;

  &:hover {
  }
`
