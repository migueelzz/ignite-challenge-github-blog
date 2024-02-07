import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;

  > div {
    width: 100%;
    max-width: 864px;

    display: flex;
    flex-direction: column;

    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 2rem;
    }
  }
`
