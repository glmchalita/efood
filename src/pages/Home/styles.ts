import styled from 'styled-components'

export const HeaderContainer = styled.div`
  max-width: 100%;
  background-color: ${({ theme }) => theme.color.bege};

  display: flex;
  justify-content: center;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 540px;
  padding: 64px 0 40px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 138px;
  text-align: center;

  h2 {
    font-size: 36px;
    font-weight: 800;
    color: ${({ theme }) => theme.color.red};
  }
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1120px;
  padding: 80px 0 120px;
  margin: 0 auto;
`

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  column-gap: 80px;
  row-gap: 48px;
`
