import { SearchContainer } from './styles'

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
