import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding-top: 4.5rem;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.75rem;

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    padding: 0.75rem;
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
