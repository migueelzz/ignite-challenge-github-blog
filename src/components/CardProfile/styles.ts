import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 54rem;
  width: 100%;
  height: 100%;
  padding: 2rem;

  margin-top: -5.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  max-height: 141px;

  display: flex;
  flex-direction: column;
`

export const CardInfo = styled.main`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1.5rem;
      line-height: 1.3;
      font-weight: bold;
      color: ${(props) => props.theme['base-title']};
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
      color: ${(props) => props.theme.blue};

      border-bottom: 1px solid transparent;

      &:hover {
        border-color: ${(props) => props.theme.blue};
      }
    }
  }

  p {
    width: 100%;
    height: 52px;
    line-height: 1.6;
    padding-top: 0.5rem;
  }
`

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 1;

    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`
