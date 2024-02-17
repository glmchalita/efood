import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;

  min-width: 24rem;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  padding: 32px;
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.bege};
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;

  top: 0.5rem;
  right: 0.5rem;

  cursor: pointer;

  color: ${({ theme }) => theme.color.bege};
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ControlsContainer = styled.div`
  margin-top: 40px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 700;
  }

  button {
    width: 100%;
  }
`
