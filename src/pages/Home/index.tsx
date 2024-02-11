import { useState } from 'react'
import { CardPost } from '../../components/CardPost'
import { CardProfile } from '../../components/CardProfile'
import { Search } from '../../components/Search'

import { CardContainer, HomeContainer } from './styles'

interface PostType {
  title: string
  body: string
  number: number
  created_at: Date
}

export function Home() {
  const [posts, setPosts] = useState<PostType[]>([])

  const handleSearch = (filteredPosts: PostType[]) => {
    setPosts(filteredPosts)
  }

  return (
    <HomeContainer>
      <CardProfile />
      <Search onSearch={handleSearch} />

      <CardContainer>
        {posts.map((post) => {
          return (
            <CardPost
              key={post.number}
              post={post}
              href={`/post/${post.number}`}
            />
          )
        })}
      </CardContainer>
    </HomeContainer>
  )
}
