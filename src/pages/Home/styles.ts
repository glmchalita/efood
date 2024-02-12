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
  padding: 64px 0;

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
  padding: 80px 170px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 48px;
  column-gap: 30px;
`
