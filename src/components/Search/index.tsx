import { useContext } from 'react'
import { SearchContainer } from './styles'
import { GitHubContext } from '../../contexts/GitHubContext'

export function Search() {
  return (
    <SearchContainer>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>

      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchContainer>
  )
}
