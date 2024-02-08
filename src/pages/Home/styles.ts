import styled from 'styled-components'

export const HomeContainer = styled.div``

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;

  padding-bottom: 234px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`
