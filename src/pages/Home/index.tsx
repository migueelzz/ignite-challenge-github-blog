import { useContext } from 'react'
import { CardPost } from '../../components/CardPost'
import { CardProfile } from '../../components/CardProfile'
import { Search } from '../../components/Search'

import { CardContainer, HomeContainer } from './styles'
import { GitHubContext } from '../../contexts/GitHubContext'

export function Home() {
  const { posts } = useContext(GitHubContext)

  return (
    <HomeContainer>
      <CardProfile />
      <Search />

      <CardContainer>
        {posts.map((post) => {
          return (
            <CardPost key={post.id} post={post} href={`/post/${post.number}`} />
          )
        })}
      </CardContainer>
    </HomeContainer>
  )
}
