import { useContext, useState } from 'react'
import { CardPost } from '../../components/CardPost'
import { CardProfile } from '../../components/CardProfile'
import { Search } from '../../components/Search'

import { CardContainer, HomeContainer } from './styles'
import { PostContext } from '../../contexts/PostContext'

export function Home() {
  const { posts } = useContext(PostContext)

  return (
    <HomeContainer>
      <CardProfile />
      <Search />
      <CardContainer>
        {posts.map((post) => (
          <CardPost
            key={post.number}
            post={post}
            href={`/post/${post.number}`}
          />
        ))}
      </CardContainer>
    </HomeContainer>
  )
}
