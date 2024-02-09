import { CardPostContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
interface CardPostType {
  id: number
  name: string
  description: string
  created_at: string
  html_url: string
}

interface CardPostProps {
  repo: CardPostType
}

export function CardPost({ repo }: CardPostProps) {
  return (
    <CardPostContainer to="#">
      <div>
        <h1>{repo.name}</h1>
        <span>
          {' '}
          {formatDistanceToNow(repo.created_at, {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <p>{repo.description}</p>
    </CardPostContainer>
  )
}
