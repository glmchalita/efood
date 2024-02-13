import * as Dialog from '@radix-ui/react-dialog'
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
export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`
export const Title = styled(Dialog.Title)`
  font-size: 18px;
  font-weight: 700;
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;

  top: 1.5rem;
  right: 1.5rem;

  cursor: pointer;

  color: ${({ theme }) => theme.color.bege};
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 32rem;
  border-radius: 6px;
  padding: 32px;
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.bege};

  display: flex;
  gap: 24px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 6px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    font-size: 14px;

    button {
      color: ${({ theme }) => theme.color.red};
      background-color: ${({ theme }) => theme.color.bege};
      padding: 4px 6px;
      display: block;
      width: fit-content;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
    }
  }
`
