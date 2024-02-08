import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const CardPostContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 26rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  cursor: pointer;
  padding: 2rem;
  border: 1px solid transparent;
  text-decoration: none;

  &:hover {
    transition: border-color 0.3s;
    border-color: ${(props) => props.theme['base-label']};
  }

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 1.25rem;

    h1 {
      width: 100%;
      max-width: 283px;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }
`
