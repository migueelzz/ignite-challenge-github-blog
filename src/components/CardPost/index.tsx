import { Post } from '../../contexts/GitHubContext'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

// import { Truncate } from '../../utils/truncate'

import { CardPostContainer } from './styles'
interface CardPostProps {
  post: Post
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, vitae
        fugiat. Id ea necessitatibus a nesciunt dolor officia obcaecati sit,
        molestiae consequatur illum. Alias possimus deleniti suscipit nisi, odio
        facere!
      </p>
    </CardPostContainer>
  )
}
