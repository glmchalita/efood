import styled from 'styled-components'

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 700;
  }

  input {
    border: 0;
    font-size: 14px;
    font-weight: 700;
    padding: 8px;
    width: 100%;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px ${({ theme }) => theme.color.bege};
    }
  }
`

export const ErrorMessage = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: red;
`
