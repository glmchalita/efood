import styled from 'styled-components'

export const HeaderContainer = styled.div`
  max-width: 100%;
  background-color: ${({ theme }) => theme.color.bege};

  display: flex;
  justify-content: center;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 64px 0;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 80px;
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
  padding: 64px 0;
  margin: 0 auto;
`

export const MainContent = styled.div`
  padding: 80px 170px;
  display: grid;
  grid-template-columns: repeat(2, 450px);
  row-gap: 48px;
  column-gap: 30px;
`
