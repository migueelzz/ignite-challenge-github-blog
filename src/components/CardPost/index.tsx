import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { CardPostContainer } from './styles'

// import { Truncate } from '../../utils/truncate'

interface PostType {
  title: string
  body: string
  number: number
  created_at: Date
}
interface CardPostProps {
  post: PostType
  href: string
}

export function CardPost({ post, href }: CardPostProps) {
  return (
    <CardPostContainer to={href}>
      <div>
        <h1>{post.title}</h1>
        <span>
          {' '}
          {formatDistanceToNow(post.created_at, {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <p>{post.body}</p>
    </CardPostContainer>
  )
}
