import styled from 'styled-components'

export const PostInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);

  margin-top: -5.5rem;

  > header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      border-bottom: 1px solid transparent;

      &:hover {
        transition: border-color 0.2s;
        border-color: ${(props) => props.theme.blue};
      }

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    padding-top: 20px;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-top: 0.5rem;
    @media (max-width: 768px) {
      gap: 0.5rem;
      padding-top: 2rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-span']};

      @media (max-width: 768px) {
        margin: 0 auto;
        flex-direction: column;
      }
    }
  }
`

export const PostContent = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 0.5rem;

    font-size: 1rem;
  }

  p {
    padding-bottom: 1.5rem;
  }

  > pre {
    padding: 1rem;
    background: ${(props) => props.theme['base-post']};
    border-radius: 2px;

    code {
      display: block;
      background: none;
      white-space: pre;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      max-width: 100%;
      min-width: 100px;
      padding: 0;
    }
  }
`
