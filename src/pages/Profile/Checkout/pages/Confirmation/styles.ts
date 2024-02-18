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

  max-width: 360px;
  width: 100%;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  padding: 32px 8px;
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.bege};

  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    font-size: 14px;
    line-height: 22px;
  }
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

export const ControlsContainer = styled.div`
  margin-top: 24px;

  button {
    width: 100%;
  }
`
